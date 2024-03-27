export interface SpinnerProps {
  className?: string;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ ...props }) => {
  const { className } = props;

  return (
    <div
      className={`${className} spinner`}
    ></div>
  );
};

export default Spinner;
