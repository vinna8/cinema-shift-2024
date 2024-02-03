import StarList from "./StarList";
import * as StyledFilmInfo from '../../../style/StyledFilmInfo';
import { Film } from "../../../types/types";

interface FilmProps {
    film: Film;
}

const Rating: React.FC<FilmProps> = ({ film }) => {
    return (
        <div>
            <StarList film={film}/>
            <StyledFilmInfo.RatingText>Kinopoisk - {film.userRatings.kinopoisk}</StyledFilmInfo.RatingText>
        </div>
    )
}

export default Rating;