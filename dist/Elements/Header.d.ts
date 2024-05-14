/// <reference types="react" />
export declare enum HeaderLevel {
    "h1" = "h1",
    "h2" = "h2",
    "h3" = "h3",
    "h4" = "h4"
}
export interface HeaderType {
    text: string | JSX.Element;
    level: string;
    className?: string;
}
declare const Header: React.FunctionComponent<HeaderType>;
export default Header;
