import * as StyledFilm from '../../style/StyledFilm';

const Time = () => {
    return (
        <>
            <div>Красный зал</div>
            <StyledFilm.TimeSessions>
                <StyledFilm.TimeLabel>11:15</StyledFilm.TimeLabel>
                <StyledFilm.TimeLabel>11:15</StyledFilm.TimeLabel>
            </StyledFilm.TimeSessions>
        </>
    )
}

export default Time;