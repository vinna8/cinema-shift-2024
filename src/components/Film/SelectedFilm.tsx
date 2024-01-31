import * as StyledFilm from '../../style/StyledFilm';
import Rating from '../FilmInfo/Rating/Rating';
import Cover from '../FilmInfo/Cover';
import FilmName from '../FilmInfo/FilmName';

const SelectedFilm = () => {
    return (
        <StyledFilm.CurrentFilmContainer>
            <Cover />
            <StyledFilm.FilmInfoContainer>
                <FilmName fontSize="32px"/>
                <Rating />
                <div>description</div>
            </StyledFilm.FilmInfoContainer>
        </StyledFilm.CurrentFilmContainer>
    )
}

export default SelectedFilm;