import * as React from "react";

export interface ButtonProps {
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className="bg-primary">{label}</button>;
};

export default Button;
