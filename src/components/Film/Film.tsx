import * as StyledFilm from '../Film/StyledFilm';
import * as StyledPoster from '../Poster/StyledPoster';
import Rating from '../Rating/Rating';
import Cover from './Cover';
import SelectedPlace from './SelectPlace';
import Timetable from './Timetable';

const Film = () => {
    return (
        <>
            <div>Назад</div>
            <StyledFilm.FilmCurrent>
                <Cover />
                <StyledFilm.FilmDecriptionContainer>
                    <div>
                        <StyledFilm.FilmTitle>Title</StyledFilm.FilmTitle>
                        <StyledPoster.PosterSubtitleFilm>Subtitle</StyledPoster.PosterSubtitleFilm>
                    </div>
                    <Rating />
                    <div>description</div>
                </StyledFilm.FilmDecriptionContainer>
            </StyledFilm.FilmCurrent>
            <Timetable />
            <SelectedPlace/>
        </>
    )
}

export default Film;