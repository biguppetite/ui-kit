import React, { InputHTMLAttributes } from "react";
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    labelClassName?: string;
    inputClassName?: string;
    child?: JSX.Element | JSX.Element[];
    errors?: [];
    icon?: JSX.Element;
}
declare const Checkbox: React.FunctionComponent<CheckboxProps>;
export default Checkbox;
