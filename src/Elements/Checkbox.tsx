import React, { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  label,
  name,
  className,
  inputClassName,
  labelClassName,
  child,
  errors = [],
  ...props
}) => {
  if (props.value == undefined || props.value == null) {
    props.value = "";
  }

  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={name}
        name={name}
        placeholder={label}
        type="checkbox"
        {...props}
        className={`form-checkbox ${inputClassName} ${errors.length ? "form-input-error" : ""}`}
      />
      {label && (
        <label className={`form-label mr-2 ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
      )}
      {child && child}
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Checkbox;
