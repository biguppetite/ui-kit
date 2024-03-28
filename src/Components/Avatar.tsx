import React from "react";

export interface AvatarProps {
  image: string;
  name?: string;
  description?: string;
  square?: boolean;
  className?: string;
  imageClassName?: string;
  nameClassName?: string;
  descriptionClassName?: string;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  image,
  description,
  name,
  square,
  className,
  descriptionClassName,
  imageClassName,
  nameClassName,
}) => {
  return (
    <div className={`avatar ${className}`}>
      <div
        className={`avatarImage ${square && "avatarImage--square"} ${imageClassName}`}
      >
        <img src={image} />
      </div>
      {(description || name) && (
        <div className={`avatarDataContainer`}>
          {name && <p className={`avatarName ${nameClassName}`}>{name}</p>}
          {description && (
            <p className={`avatarDescription ${descriptionClassName}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
