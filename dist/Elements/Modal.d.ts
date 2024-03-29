/// <reference types="react" />
export interface ModalProps {
    hide: () => void;
    visible: boolean;
    children?: JSX.Element | JSX.Element[];
    className?: string;
    closeBtnClassName?: string;
}
declare const Modal: React.FunctionComponent<ModalProps>;
export default Modal;
