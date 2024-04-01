export interface ParagraphProps {
  text: string;
  className?: string;
  paragraphSize?: string;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  text,
  className,
  paragraphSize,
}) => {
  const paragraphClass =
    paragraphSize === "small"
      ? "paragraph-small"
      : paragraphSize === "medium"
        ? "paragraph-medium"
        : "paragraph-large";
  return <p className={`paragraph ${paragraphClass} ${className}`}>{text}</p>;
};

export default Paragraph;
