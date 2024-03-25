import * as React from "react";

export enum buttonType {
  openMobileMenu = "openMobileMenu",
  dashboardOpenMobileMenu = "dashboardOpenMobileMenu",
  primary = "primary",
  danger = "danger",
  stone = "stone",
  outline = "outline",
  selected = "selected",
  disclosure = "disclosure",
}

export interface ButtonProps extends HTMLButtonElement {
  btnType: buttonType;
  label: string;
  parentClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  btnType,
  parentClassName,
  child,
  errors = [],
  ...props
}) => {
  const classMap = {
    [buttonType.openMobileMenu]: "btn-open-mobile-menu",
    [buttonType.dashboardOpenMobileMenu]: "btn-dashboard-open-mobile-menu",
    [buttonType.primary]: "btn-primary",
    [buttonType.danger]: "btn-danger",
    [buttonType.outline]: "btn-outline",
    [buttonType.selected]: "btn-selected",
    [buttonType.stone]: "btn-stone",
    [buttonType.disclosure]: "disclosure-button",
  };

  return (
    <div className={`flex flex-col ${parentClassName}`}>
      <button
        className={`flex items-center justify-center ${classMap[btnType] || classMap[buttonType.primary]} ${props.className}`}
        name={props.name}
      >
        {label}
        {child && child}
      </button>
      {errors?.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Button;
