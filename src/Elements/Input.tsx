import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
  icon?: JSX.Element;
  iconPosition?:'right' | 'left'
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  className,
  inputClassName,
  child,
  name,
  errors = [],
  icon,
  iconPosition,
  ...props
}) => {
  if (props.value === undefined || props.value === null) {
    props.value = "";
  }

  const [inValue, setInValue] = useState(props.value);

  const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setInValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <div
        className={`form-input ${inputClassName} ${errors.length ? "form-input-error" : ""}`}
      >
        {iconPosition !== 'right' && icon}
        <input
          {...props}
          value={inValue}
          id={name}
          onChange={changeEvent}
          className="border-none outline-none focus:outline-none flex-1"
        />
        {iconPosition === 'right' && icon}
      </div>
      {child && child}
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Input;
