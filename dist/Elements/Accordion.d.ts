/// <reference types="react" />
export interface AccordionProps {
    items: {
        title: string;
        content: string | JSX.Element;
    }[];
    className?: string;
    titleClassName?: string;
    titleOpenClassName?: string;
    dropDownIconClassName?: string;
    contentClassName?: string;
    contentOpenClassName?: string;
    dropDownBtnTemplate?: (isActive: boolean) => JSX.Element;
    changeActiveIndex?: (index: number | null) => void;
    containerOpenClassName?: string;
    containerClassName?: string;
    dropDownIconOpenClassName?: string;
}
declare const Accordion: React.FunctionComponent<AccordionProps>;
export default Accordion;
