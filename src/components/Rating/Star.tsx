import greyStar from '../../assets/grey-star.svg';
/*import goldStar from '../../assets/gold-star.svg';*/
import * as StyledRating from '../Rating/StyledRating'

const Star = () => {
    return (
        <>
            <StyledRating.Star src={ greyStar } alt="star"/>
            {/*<StyledRating.Star src={ goldStar } alt="star"/>*/}
        </>
    )
}

export default Star;