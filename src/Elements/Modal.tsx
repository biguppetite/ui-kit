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
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-40 bg-black/20"
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-lg z-50 shadow-lg min-w-96 w-max overflow-hidden min-h-16 ${className}`}
      >
        <div
          className={`absolute top-3 left-3 cursor-pointer text-lg ${closeBtnClassName}`}
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
