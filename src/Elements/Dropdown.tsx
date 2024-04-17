import React, { ChangeEvent, HTMLAttributes, useState } from "react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  inputClassName?: string;
  errors?: [];
  items?: any[];
  placeholder?: string;
  value: any;
  clearable?: boolean;
  editable?: boolean;
  itemLabel?: string;
  hideDropdownBtn?: boolean;
  itemTemplate?: (e: any) => JSX.Element;
  itemClassName?: string;
  containerClassName?: string;
  dropdownIconContainerClassName?: string;
  dropdownIconClassName?:string
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  label,
  inputClassName,
  errors = null,
  items,
  placeholder,
  value,
  clearable,
  editable = true,
  itemLabel,
  hideDropdownBtn,
  itemTemplate,
  itemClassName,
  onChange,
  className,
  containerClassName,
  dropdownIconContainerClassName,
  dropdownIconClassName
}) => {
  const [selected, setSelected] = useState<string | null>(value);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setVisible(true);
    setSelected(null);
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  const selectValue = (data: any) => {
    setSelected(itemLabel ? data[itemLabel] : data);
    setInputValue(null);
    setVisible(false);
    if (onChange) onChange(data);
  };

  const generateList = () => {
    const data: JSX.Element[] = [];
    items?.forEach(
      (item, index) =>
        (!inputValue ||
          (itemLabel ? item[itemLabel] : item).includes(inputValue)) &&
        data.push(
          <li
            onClick={() => selectValue(item)}
            className={`dropdownItem ${itemClassName}`}
            key={index}
          >
            {itemTemplate
              ? itemTemplate(item)
              : itemLabel
                ? item[itemLabel]
                : item}
          </li>
        )
    );

    return data.length > 0 ? (
      data
    ) : (
      <div className="p-2 flex items-center justify-center font-semibold">
        Not found
      </div>
    );
  };

  return (
    <div className={`relative ${containerClassName}`}>
      {label && <label className="form-label">{label}</label>}
      <div className="relative">
        <div
          className={`flex items-stretch  border border-gray-500 rounded-md overflow-hidden z-50 relative bg-white ${className}`}
        >
          <input
            disabled={!editable}
            className={`flex-1 p-2 focus:outline-none ${inputClassName}`}
            placeholder={placeholder}
            onChange={changeValue}
            value={inputValue || selected || ""}
          />
          {clearable && (
            <div className="w-5 h-5 cursor-pointer flex items-center justify-center rounded-full bg-gray-300 text-white my-auto mr-2">
              <XMarkIcon className="w-4" />
            </div>
          )}
          {!hideDropdownBtn && (
            <div
              onClick={() => setVisible((pre) => !pre)}
              className={`w-12 flex items-center justify-center cursor-pointer border-l border-gray-300 ${dropdownIconContainerClassName}`}
            >
              <ChevronDownIcon className={`w-5 ${dropdownIconClassName}`} />
            </div>
          )}
        </div>
        <ul
          className={`absolute top-full left-0 w-full shadow-lg bg-white transition-all duration-200 max-h-0 overflow-hidden ${visible && "max-h-screen z-50"}`}
        >
          {generateList()}
        </ul>

        {visible && (
          <div
            className="w-screen h-screen fixed top-0 left-0 bg-transparent z-40"
            onClick={() => setVisible(false)}
          />
        )}
      </div>

      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Dropdown;
