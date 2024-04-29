import React, { InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputClassName?: string;
    child?: JSX.Element | JSX.Element[];
    errors?: string[];
    icon?: JSX.Element;
    iconPosition?: "right" | "left";
}
declare const Input: React.FunctionComponent<InputProps>;
export default Input;
