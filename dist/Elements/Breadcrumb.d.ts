import React from "react";
export type itemType = {
    name?: string;
    id: string;
    icon?: string | JSX.Element;
    onClick?: (id: string) => void;
    link?: string;
    className?: string;
};
export interface BreadcrumbProps {
    items: itemType[];
    className?: string;
    itemClassName?: string;
    chevronClassName?: string;
}
declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
export default Breadcrumb;
