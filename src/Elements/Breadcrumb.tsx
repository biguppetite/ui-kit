import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
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

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  items,
  className,
  itemClassName,
  chevronClassName,
}) => {
  const compProvider = (childEl: JSX.Element, item: itemType, index: number) =>
    item.link ? (
      <Link className={item.className} key={index} href={item.link}>
        {childEl}
      </Link>
    ) : (
      <div className={item.className}>{childEl}</div>
    );

  return (
    <div className={`breadcrumb ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <ChevronRightIcon className={`w-5 ${chevronClassName}`} />
          )}
          {compProvider(
            <>
              {item.icon &&
                (typeof item.icon === "string" ? (
                  <img src={item.icon} />
                ) : (
                  item.icon
                ))}
              {item.name && (
                <div className={`breadcrumbItem ${item.className} ${itemClassName}`}>
                  {item.name}
                </div>
              )}
            </>,
            item,
            index
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
