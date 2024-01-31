import * as StyledFilm from '../Film/StyledFilm';
import * as StyledPoster from '../Poster/StyledPoster';
import Rating from '../Rating/Rating';
import Button from '../UI-kit/Button';
import Cover from './Cover';
import Timetable from './Timetable';

const CinemaHall = () => {
    return (
        <>
            <div>Экран</div>
            <StyledFilm.Screen></StyledFilm.Screen>
        </>
    )
}

export default CinemaHall;