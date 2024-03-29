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
declare const Avatar: React.FunctionComponent<AvatarProps>;
export default Avatar;
