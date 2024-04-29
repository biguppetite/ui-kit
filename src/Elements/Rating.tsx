import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarLine } from "@heroicons/react/24/outline";

export interface RatingProps {
  maxRate: number;
  rate: number;
  emptyStarClassName?: string;
  fillStarClassName?: string;
  containerClassName?: string;
  onClick?: (index: number) => void;
}

const Rating: React.FunctionComponent<RatingProps> = ({
  maxRate,
  rate,
  containerClassName,
  emptyStarClassName,
  fillStarClassName,
  onClick,
}) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < maxRate; i++) {
      if (i < rate)
        stars.push(
          <StarIcon
            key={i}
            onClick={() => onClick && onClick(i)}
            className={`ratingFillStar ${fillStarClassName}`}
          />
        );
      else
        stars.push(
          <StarLine
            key={i}
            onClick={() => onClick && onClick(i)}
            className={`ratingEmptyStar ${emptyStarClassName}`}
          />
        );
    }
    return stars;
  };

  return <div className={`flex ${containerClassName}`}>{generateStars()}</div>;
};

export default Rating;
