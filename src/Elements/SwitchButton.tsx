import React, { ChangeEvent } from "react";

export interface SwitchButtonProps {
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SwitchButton: React.FunctionComponent<SwitchButtonProps> = (props) => {
  const { checked, onChange } = props;

  return (
    <label
      className={`relative inline-block w-10 h-5 rounded-full ${checked ? "bg-primary " : "bg-gray-600"}`}
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`rounded-full absolute cursor-pointer top-0 left-0 right-0 bottom-0  duration-200
            before:absolute before:content-[" "] before:h-3  before:w-3 before:rounded-full before:bg-white before:left-1 before:top-1/2 before:-translate-y-1/2 before:duration-200
            ${checked && "before:translate-x-5"}`}
      />
    </label>
  );
};

export default SwitchButton;
