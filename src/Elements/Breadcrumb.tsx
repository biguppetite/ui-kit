import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type itemType = {
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
  const provider = (child: JSX.Element, item?: itemType) =>
    item?.link ? (
      <Link
        href={item.link}
        className={`flex items-center breadcrumbItem ${itemClassName} ${item.className}`}
      >
        {child}
      </Link>
    ) : (
      <div
        className={`flex items-center breadcrumbItem ${itemClassName} ${item?.className} `}
      >
        {child}
      </div>
    );

  return (
    <div className={`breadcrumb ${className}`}>
      {items.map((item, index) => (
        <>
          {index !== 0 && (
            <ChevronRightIcon className={`w-5 ${chevronClassName}`} />
          )}
          {provider(
            <>
              {item.icon &&
                (typeof item.icon === "string" ? (
                  <img src={item.icon} />
                ) : (
                  item.icon
                ))}
              {item.name}
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
