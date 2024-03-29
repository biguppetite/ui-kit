import React, { HTMLAttributes } from "react";
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
    hideDropdownBtn?: boolean;
    itemTemplate?: (e: any) => JSX.Element;
    itemClassName?: string;
}
declare const Dropdown: React.FunctionComponent<DropdownProps>;
export default Dropdown;
