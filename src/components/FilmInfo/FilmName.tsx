import * as StyledFilmInfo from '../../style/StyledFilmInfo';
import { Film } from '../../types/types';

interface FilmProps {
    fontSize: string;
    film: Film;
}

const FilmName: React.FC<FilmProps> = ({ fontSize, film }) => {
    return (
        <div>
            <StyledFilmInfo.FilmTitle fontSize={ fontSize }>{film.name}</StyledFilmInfo.FilmTitle>
            <StyledFilmInfo.FilmSubtitle>{film.originalName}</StyledFilmInfo.FilmSubtitle>
        </div>
    )
}

export default FilmName;