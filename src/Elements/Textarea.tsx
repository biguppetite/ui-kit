import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  inputClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: string[];
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  label,
  className,
  inputClassName,
  child,
  name,
  errors = [],
  ...props
}) => {
  if (props.value === undefined || props.value === null) {
    props.value = "";
  }

  const [inValue, setInValue] = useState(props.value);

  const changeEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        {...props}
        value={inValue}
        id={name}
        className={`form-input ${inputClassName} ${errors.length ? "form-input-error" : ""}`}
        onChange={changeEvent}
      />
      {child && child}
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Textarea;
