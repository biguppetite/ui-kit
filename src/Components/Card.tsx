import React from "react";
import Header, { HeaderLevel } from "../Elements/Header";
import Paragraph from "../Elements/Paragraph";
import Button, { buttonType } from "../Elements/Button";
import { Link } from "react-router-dom";

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
}) => {
  const provider = (child: JSX.Element) =>
    cardLink ? (
      <Link
        onClick={cardOnClick}
        className={`cardData ${className}`}
        to={cardLink}
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
      {image && (
        <img
          className={`w-full ${imageClassName}`}
          alt={title || description}
          src={image}
        />
      )}
      <div className="cardData__dataContainer">
        {!upTitle && title && (
          <Header
            text={title}
            level={HeaderLevel.h3}
            className={`cardData__title ${titleClassName}`}
          />
        )}
        {description && (
          <Paragraph
            text={description}
            className={`cardData__description ${descriptionClassName}`}
          />
        )}
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
