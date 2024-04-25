import { TextareaHTMLAttributes } from "react";
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    inputClassName?: string;
    child?: JSX.Element | JSX.Element[];
    errors?: string[];
}
declare const Textarea: React.FunctionComponent<TextareaProps>;
export default Textarea;
