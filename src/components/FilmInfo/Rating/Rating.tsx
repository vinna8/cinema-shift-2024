import StarList from "./StarList";
import * as StyledFilmInfo from '../../../style/StyledFilmInfo';

const Rating = () => {
    return (
        <div>
            <StarList />
            <StyledFilmInfo.RatingText>Kinopoisk - 8.4</StyledFilmInfo.RatingText>
        </div>
    )
}

export default Rating;