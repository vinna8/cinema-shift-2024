import greyStar from '../../../assets/grey-star.svg';
import goldStar from '../../../assets/gold-star.svg';
import * as StyledFilmInfo from '../../../style/StyledFilmInfo';
import { Film } from '../../../types/types';

interface FilmProps {
    film: Film;
}

const StarList: React.FC<FilmProps> = ({ film }) => {
    const maxRating = 10;
    const stars = 5;
    const filledStars = Math.round(Number(film.userRatings.kinopoisk) / maxRating * stars);

    return (
        <>
            {Array.from({ length: stars }, (_, index) => (
                <StyledFilmInfo.RatingStar 
                    key = {index}
                    src={(index < filledStars) ? goldStar : greyStar} 
                    alt="star"
                />
            ))}
        </>
    )
}

export default StarList;