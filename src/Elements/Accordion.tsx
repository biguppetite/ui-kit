import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export interface AccordionProps {
  items: { title: string; content: string | JSX.Element }[];
  className?: string;
  titleClassName?: string;
  dropDownIconClassName?: string;
  contentClassName?: string;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  items,
  className,
  titleClassName,
  dropDownIconClassName,
  contentClassName,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <div className="w-full" key={index}>
          <div
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            className={`border-b border-gray-200 w-full py-2 flex items-center cursor-pointer ${titleClassName}`}
          >
            {item.title}

            <ChevronDownIcon
              className={`ml-auto w-5 ${dropDownIconClassName}`}
            />
          </div>
          <div
            className={`max-h-0 w-full overflow-hidden transition-all duration-200 ${index === activeIndex && "max-h-screen"}`}
          >
            <div className={`p-3 border-b border-gray-200 ${contentClassName}`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
