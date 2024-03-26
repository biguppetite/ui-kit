import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  className,
  inputClassName,
  child,
  name,
  errors = [],
  ...props
}) => {
  if (props.value == undefined || props.value == null) {
    props.value = "";
  }

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        {...props}
        id={name}
        className={`form-input ${inputClassName} ${errors.length ? "form-input-error" : ""}`}
      />
      {child && child}
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Input;
