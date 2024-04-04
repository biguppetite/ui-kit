export enum HeaderLevel {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
}

export interface HeaderType {
  text: string | JSX.Element;
  level: string;
  className?: string;
}

const Header: React.FunctionComponent<HeaderType> = ({
  level,
  text,
  className,
}) => {
  const finalClass = `${className} header`;

  return level === HeaderLevel.h1 ? (
    <h1 className={`${finalClass} header-h1`}>{text}</h1>
  ) : level === HeaderLevel.h2 ? (
    <h2 className={`${finalClass} header-h2`}>{text}</h2>
  ) : level === HeaderLevel.h3 ? (
    <h3 className={`${finalClass} header-h3`}>{text}</h3>
  ) : (
    <h4 className={`${finalClass} header-h4`}>{text}</h4>
  );
};

export default Header;
