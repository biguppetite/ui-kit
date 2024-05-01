import React, { HTMLAttributes } from "react";
export interface DropdownProps extends HTMLAttributes<HTMLElement> {
    label?: string;
    inputClassName?: string;
    errors?: string[];
    items?: any[];
    placeholder?: string;
    value: any;
    clearable?: boolean;
    editable?: boolean;
    itemLabel?: string;
    hideDropdownBtn?: boolean;
    itemTemplate?: (e: any) => JSX.Element;
    itemClassName?: string;
    containerClassName?: string;
    dropdownIconContainerClassName?: string;
    dropdownIconClassName?: string;
    headerTemplate?: (v: any) => JSX.Element;
}
declare const Dropdown: React.FunctionComponent<DropdownProps>;
export default Dropdown;
