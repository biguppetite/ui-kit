import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
  icon?: JSX.Element;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  label,
  name,
  className,
  inputClassName,
  labelClassName,
  child,
  errors = [],
  checked,
  icon,
  ...props
}) => {
  const [inChecked, setInChecked] = useState(!!checked);

  if (props.value === undefined || props.value === null) {
    props.value = "";
  }

  const changeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e);
    setInChecked(e.target.checked);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <input
          id={name}
          name={name}
          placeholder={label}
          type="checkbox"
          checked={inChecked}
          onChange={changeCheck}
          {...props}
          className={`form-checkbox ${inputClassName} ${errors.length ? "form-input-error" : ""}`}
        />
        {inChecked && (
          <label htmlFor={name}>
            {icon || (
              <CheckIcon className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-4 font-bold" />
            )}
          </label>
        )}
      </div>
      {label && (
        <label className={`form-label ml-2 ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
      )}
      {child && child}
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Checkbox;
