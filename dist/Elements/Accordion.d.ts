/// <reference types="react" />
export interface AccordionProps {
    items: {
        title: string;
        content: string | JSX.Element;
    }[];
    className?: string;
    titleClassName?: string;
    dropDownIconClassName?: string;
    contentClassName?: string;
    dropDownBtnTemplate?: (isActive: boolean) => JSX.Element;
}
declare const Accordion: React.FunctionComponent<AccordionProps>;
export default Accordion;
