export interface ScrollListProps {
  list: JSX.Element[];
  containerClassName?: string;
}

const ScrollList: React.FunctionComponent<ScrollListProps> = ({
  list,
  containerClassName,
  ...props
}) => {
  return (
    <div className={`scrollContainer no-scrollbar  ${containerClassName}`}>
      <div className="flex items-center justify-start ">{list}</div>
    </div>
  );
};

export default ScrollList;
