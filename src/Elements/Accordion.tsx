import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export interface AccordionProps {
  items: { title: string; content: string | JSX.Element }[];
  className?: string;
  titleClassName?: string;
  titleOpenClassName?: string;
  dropDownIconClassName?: string;
  contentClassName?: string;
  contentOpenClassName?: string;
  dropDownBtnTemplate?: (isActive: boolean) => JSX.Element;
  changeActiveIndex?: (index: number | null) => void;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  items,
  className,
  titleClassName,
  dropDownIconClassName,
  contentClassName,
  dropDownBtnTemplate,
  contentOpenClassName,
  titleOpenClassName,
  changeActiveIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const changeIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    if (changeActiveIndex)
      changeActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`accordionMain ${className}`}>
      {items.map((item, index) => (
        <div className="w-full" key={index}>
          <div
            onClick={() => changeIndex(index)}
            className={`accordionTitle ${titleClassName} ${index === activeIndex && titleOpenClassName}`}
          >
            {item.title}

            {dropDownBtnTemplate ? (
              dropDownBtnTemplate(index === activeIndex)
            ) : (
              <ChevronDownIcon
                className={`accordionIcon ${dropDownIconClassName}`}
              />
            )}
          </div>
          <div
            className={`max-h-0 w-full overflow-hidden transition-all duration-200 ${index === activeIndex && "max-h-screen"}`}
          >
            <div
              className={`accordionContainer ${contentClassName} ${index === activeIndex && contentOpenClassName}`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
