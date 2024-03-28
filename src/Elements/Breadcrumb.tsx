import { ChevronRightIcon } from "@heroicons/react/24/solid";

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

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  items,
  className,
  itemClassName,
  chevronClassName,
}) => {
  return (
    <div className={`breadcrumb ${className}`}>
      {items.map((item, index) => (
        <>
          {index !== 0 && (
            <ChevronRightIcon className={`w-5 ${chevronClassName}`} />
          )}
          {item.icon &&
            (typeof item.icon === "string" ? (
              <img src={item.icon} />
            ) : (
              item.icon
            ))}
          {item.name && (
            <div className={`breadcrumbItem ${itemClassName}`}>{item.name}</div>
          )}
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
