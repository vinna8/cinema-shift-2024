import Time from './Time';
import * as StyledFilm from '../Film/StyledFilm';

const Times = () => {
    return (
        <>
            <div>tabs</div>
            <StyledFilm.TimeSessionInHallContainer>
                <Time />
                <Time />
            </StyledFilm.TimeSessionInHallContainer>
        </>
    )
}

export default Times;