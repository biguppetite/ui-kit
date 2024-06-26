import React from "react";
import Header, { HeaderLevel } from "../Elements/Header";
import Paragraph from "../Elements/Paragraph";
import Button, { buttonType } from "../Elements/Button";
import Link from "next/link";

export interface CardProps {
  image?: string | JSX.Element;
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

const Card: React.FunctionComponent<CardProps> = ({
  btnLink,
  btnOnClick,
  btnText,
  cardLink,
  cardOnClick,
  description,
  image,
  title,
  upTitle,
  className,
  titleClassName,
  descriptionClassName,
  ButtonClassName,
  imageClassName,
  dataContainerClassName,
  paragraphExtraComponent,
  imageExtraComponent,
  ExtraComponent,
}) => {
  const provider = (child: JSX.Element) =>
    cardLink ? (
      <Link
        onClick={cardOnClick}
        className={`cardData ${className}`}
        href={cardLink}
      >
        {child}
      </Link>
    ) : (
      <div onClick={cardOnClick} className={`cardData ${className}`}>
        {child}
      </div>
    );

  return provider(
    <>
      {upTitle && title && (
        <Header
          text={title}
          level={HeaderLevel.h3}
          className={`cardData__title cardData__title--top ${titleClassName}`}
        />
      )}

      {typeof image === "string" ? (
        <img
          className={`w-full h-full object-cover ${imageClassName}`}
          alt={title || description}
          src={image}
        />
      ) : (
        image
      )}
      {imageExtraComponent}

      <div className={`cardData__dataContainer ${dataContainerClassName}`}>
        {!upTitle && title && (
          <Header
            text={title}
            level={HeaderLevel.h3}
            className={`cardData__title ${titleClassName}`}
          />
        )}
        {paragraphExtraComponent}
        {description && (
          <Paragraph
            text={description}
            className={`cardData__description ${descriptionClassName}`}
          />
        )}
        {ExtraComponent}
        {btnText && (
          <Button
            btnType={buttonType.primary}
            label={btnText}
            link={btnLink}
            onClick={btnOnClick}
            className={`${ButtonClassName}`}
          />
        )}
      </div>
    </>
  );
};

export default Card;
