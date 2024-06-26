import Link from "next/link";
import * as React from "react";
import Spinner from "./Spinner";

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

export interface ButtonProps  {
  btnType: string;
  label: string | JSX.Element;
  parentClassName?: string;
  child?: JSX.Element | JSX.Element[];
  errors?: [];
  link?: string;
  onClick?:() => void,
  className?:string,
  loading?:boolean,
  loadingClassName?:string
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  btnType,
  parentClassName,
  child,
  errors = [],
  link,
  onClick,
  className,
  loading,
  loadingClassName
}) => {
  const classMap: { [key: string]: string } = {
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
    <div  className={`flex flex-col ${parentClassName}`}>
      {link ? (
        <Link
          href={link}
          className={`button-main ${classMap[btnType] || classMap[buttonType.primary]} ${className}`}
          onClick={onClick}
        >
          {label}
          {child && child}
          {loading && <Spinner className={`ml-1 ${loadingClassName}`} />}
        </Link>
      ) : (
        <button
          className={`button-main ${classMap[btnType] || classMap[buttonType.primary]} ${className}`}
          onClick={onClick}
        >
          {label}
          {child && child}
          {loading && <Spinner className={`ml-1 ${loadingClassName}`} />}
        </button>
      )}
      {errors?.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

export default Button;
