import * as StyledFilm from '../../style/StyledFilm';
import Rating from '../FilmInfo/Rating/Rating';
import Cover from '../FilmInfo/Cover';
import FilmName from '../FilmInfo/FilmName';
import { Film } from '../../types/types';

interface FilmProps {
    film: Film;
}

const SelectedFilm: React.FC<FilmProps> = ({ film }) => {
    return (
        <StyledFilm.CurrentFilmContainer>
            <Cover film={film}/>
            <StyledFilm.FilmInfoContainer>
                <FilmName film={film} fontSize="32px"/>
                <Rating film={film}/>
                <div>{film.description}</div>
            </StyledFilm.FilmInfoContainer>
        </StyledFilm.CurrentFilmContainer>
    )
}

export default SelectedFilm;