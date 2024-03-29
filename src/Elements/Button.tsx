import * as React from "react";
import { Link } from "react-router-dom";

export enum buttonType {
  openMobileMenu = "openMobileMenu",
  dashboardOpenMobileMenu = "dashboardOpenMobileMenu",
  primary = "primary",
  primaryStrokeOnly = "primaryStrokeOnly",
  danger = "danger",
  stone = "stone",
  outline = "outline",
  selected = "selected",
  disclosure = "disclosure",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: buttonType;
  label: string | JSX.Element;
  parentClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
  link?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  btnType,
  parentClassName,
  child,
  errors = [],
  link,
  ...props
}) => {
  const classMap = {
    [buttonType.openMobileMenu]: "btn-open-mobile-menu",
    [buttonType.dashboardOpenMobileMenu]: "btn-dashboard-open-mobile-menu",
    [buttonType.primary]: "btn-primary",
    [buttonType.primaryStrokeOnly]: "btn-primary-stroke-only",
    [buttonType.danger]: "btn-danger",
    [buttonType.outline]: "btn-outline",
    [buttonType.selected]: "btn-selected",
    [buttonType.stone]: "btn-stone",
    [buttonType.disclosure]: "disclosure-button",
  };

  return (
    <div className={`flex flex-col ${parentClassName}`}>
      {link ? (
        <Link
          to={link}
          className={`button-main ${classMap[btnType] || classMap[buttonType.primary]} ${props.className}`}
        >
          {label}
          {child && child}
        </Link>
      ) : (
        <button
          className={`button-main ${classMap[btnType] || classMap[buttonType.primary]} ${props.className}`}
          name={props.name}
        >
          {label}
          {child && child}
        </button>
      )}
      {errors?.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Button;
