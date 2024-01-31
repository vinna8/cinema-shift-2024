import * as StyledFilm from '../Film/StyledFilm';

const Time = () => {
    return (
        <>
            <div>Красный зал</div>
            <StyledFilm.TimeSessionInHall>
                <StyledFilm.FilmTimeLabel>11:15</StyledFilm.FilmTimeLabel>
                <StyledFilm.FilmTimeLabel>11:15</StyledFilm.FilmTimeLabel>
            </StyledFilm.TimeSessionInHall>
        </>
    )
}

export default Time;