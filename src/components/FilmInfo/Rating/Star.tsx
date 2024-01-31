import greyStar from '../../../assets/grey-star.svg';
/*import goldStar from '../../../assets/gold-star.svg';*/
import * as StyledFilmInfo from '../../../style/StyledFilmInfo';

const Star = () => {
    return (
        <>
            <StyledFilmInfo.RatingStar src={ greyStar } alt="star"/>
            {/*<StyledFilmInfo.RatingStar src={ goldStar } alt="star"/>*/}
        </>
    )
}

export default Star;