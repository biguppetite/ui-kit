import React, { ChangeEvent } from "react";

export interface SwitchButtonProps {
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  bubbleClassName?: string;
}

const SwitchButton: React.FunctionComponent<SwitchButtonProps> = (props) => {
  const { checked, onChange, className, bubbleClassName } = props;

  return (
    <label
      className={`switchButtonContainer ${checked ? "bg-primary " : "bg-gray-600"} ${className}`}
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`switchButtonBubble  ${checked && "before:translate-x-5"} ${bubbleClassName}`}
      />
    </label>
  );
};

export default SwitchButton;
