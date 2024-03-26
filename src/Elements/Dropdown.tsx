import React, { HTMLAttributes, useState } from "react";

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
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  label,
  inputClassName,
  errors = null,
  items,
  placeholder,
  value,
  clearable = true,
  editable,
  itemLabel,

  onChange,
  className,
}) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [display, setDisplay] = useState(value);

  return (
    <div className={`relative ${className}`}>
      {label && <label className="form-label">{label}</label>}

      <div className="relative">
        <div className="flex items-center">
          <input
            disabled={!editable}
            className={`${inputClassName}`}
            placeholder={placeholder}
          />
          <div> * </div>
        </div>
        <ul className="absolute top-full left-0 w-full ">
          {items?.map((item, index) => (
            <li key={index}>{itemLabel ? item[itemLabel] : item}</li>
          ))}
        </ul>
      </div>

      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Dropdown;
