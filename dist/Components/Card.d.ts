import React from "react";
export interface CardProps {
    image?: string;
    title?: string;
    description?: string;
    btnText?: string;
    btnOnClick?: () => void;
    cardOnClick?: () => void;
    cardLink?: string;
    btnLink?: string;
    upTitle?: boolean;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    ButtonClassName?: string;
    imageClassName?: string;
    ExtraComponent?: JSX.Element;
    paragraphExtraComponent?: JSX.Element;
    imageExtraComponent?: JSX.Element;
    dataContainerClassName?: string;
}
declare const Card: React.FunctionComponent<CardProps>;
export default Card;
