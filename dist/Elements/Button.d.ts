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
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType: buttonType;
    label: string | JSX.Element;
    parentClassName?: string;
    child?: JSX.Element | JSX.Element[];
    errors?: [];
    link?: string;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
