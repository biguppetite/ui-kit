import * as React from "react";
export declare enum buttonType {
    openMobileMenu = "openMobileMenu",
    dashboardOpenMobileMenu = "dashboardOpenMobileMenu",
    primary = "primary",
    primaryStrokeOnly = "primaryStrokeOnly",
    danger = "danger",
    stone = "stone",
    outline = "outline",
    selected = "selected",
    disclosure = "disclosure"
}
export interface ButtonProps {
    btnType: string;
    label: string | JSX.Element;
    parentClassName?: string;
    child?: JSX.Element | JSX.Element[];
    errors?: [];
    link?: string;
    onClick?: () => void;
    className?: string;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
