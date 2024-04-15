import { ChevronRightIcon } from "@heroicons/react/24/solid";

export interface BreadcrumbProps {
  items: {
    name?: string | JSX.Element;
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
            <ChevronRightIcon key={index} className={`w-5 ${chevronClassName}`} />
          )}
          {item.icon &&
            (typeof item.icon === "string" ? (
              <img key={index} src={item.icon} />
            ) : (
              item.icon
            ))}
          {item.name && (
            <div key={index} className={`breadcrumbItem ${itemClassName}`}>{item.name}</div>
          )}
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
