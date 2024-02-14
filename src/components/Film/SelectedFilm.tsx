import { Film } from '../../types/types';

import Rating from '../FilmInfo/Rating/Rating';
import Cover from '../FilmInfo/Cover';
import FilmName from '../FilmInfo/FilmName';

import * as StyledFilm from '../../style/StyledFilm';

interface FilmProps {
    film: Film;
}

const SelectedFilm: React.FC<FilmProps> = ({ film }) => (
    <StyledFilm.CurrentFilmContainer>
        <Cover film={film}/>
        <StyledFilm.FilmInfoContainer>
            <FilmName film={film} fontSize="32px"/>
            <Rating film={film}/>
            <div>{film.description}</div>
        </StyledFilm.FilmInfoContainer>
    </StyledFilm.CurrentFilmContainer>
)

export default SelectedFilm;