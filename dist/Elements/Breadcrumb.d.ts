/// <reference types="react" />
export interface BreadcrumbProps {
    items: {
        name?: string;
        id: string;
        icon?: string | JSX.Element;
        onClick?: (id: string) => void;
    }[];
    className?: string;
    itemClassName?: string;
    chevronClassName?: string;
}
declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
export default Breadcrumb;
