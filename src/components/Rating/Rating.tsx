import Stars from "./Stars";
import * as StyledRating from '../Rating/StyledRating'

const Rating = () => {
    return (
        <div>
            <Stars />
            <StyledRating.RatingText>Kinopoisk - 8.4</StyledRating.RatingText>
        </div>
    )
}

export default Rating;