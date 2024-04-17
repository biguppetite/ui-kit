import { XMarkIcon } from "@heroicons/react/24/solid";

export interface ModalProps {
  hide: () => void;
  visible: boolean;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  closeBtnClassName?: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({ ...props }) => {
  const { hide, visible, children, className, closeBtnClassName } = props;

  return visible ? (
    <>
      <div
        onClick={hide}
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-[100] bg-black/20"
      ></div>
      <div
        className={`modalContainer ${className}`}
      >
        <div
          className={`modalCloseBtn ${closeBtnClassName}`}
          onClick={hide}
        >
          <XMarkIcon className="w-4" />
        </div>
        {children}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
