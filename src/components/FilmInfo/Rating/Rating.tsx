import { Film } from "../../../types/types";

import StarList from "./StarList";

import * as StyledFilmInfo from '../../../style/StyledFilmInfo';


interface FilmProps {
    film: Film;
}

const Rating: React.FC<FilmProps> = ({ film }) => (
    <div>
        <StarList film={film}/>
        <StyledFilmInfo.RatingText>Kinopoisk - {film.userRatings.kinopoisk}</StyledFilmInfo.RatingText>
    </div>
)

export default Rating;