import { Film } from '../../types/types';

import * as StyledFilmInfo from '../../style/StyledFilmInfo';

interface FilmProps {
    fontSize: string;
    film: Film;
}

const FilmName: React.FC<FilmProps> = ({ fontSize, film }) => (
    <div>
        <StyledFilmInfo.FilmTitle fontSize={ fontSize }>{film.name}</StyledFilmInfo.FilmTitle>
        <StyledFilmInfo.FilmSubtitle>{film.originalName}</StyledFilmInfo.FilmSubtitle>
    </div>
)

export default FilmName;