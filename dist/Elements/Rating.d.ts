/// <reference types="react" />
export interface RatingProps {
    maxRate: number;
    rate: number;
    emptyStarClassName?: string;
    fillStarClassName?: string;
    containerClassName?: string;
    onClick?: (index: number) => void;
}
declare const Rating: React.FunctionComponent<RatingProps>;
export default Rating;
