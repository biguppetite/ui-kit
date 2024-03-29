import React, { ChangeEvent } from "react";
export interface SwitchButtonProps {
    checked: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    bubbleClassName?: string;
}
declare const SwitchButton: React.FunctionComponent<SwitchButtonProps>;
export default SwitchButton;
