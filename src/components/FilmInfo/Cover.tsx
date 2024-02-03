import * as StyledFilmInfo from '../../style/StyledFilmInfo';
import { Film } from '../../types/types';

interface FilmProps {
    film: Film;
}

const Cover: React.FC<FilmProps> = ({ film }) => {
    return (
        <StyledFilmInfo.CoverContainer>
            <StyledFilmInfo.FilmImage src={`https://shift-backend.onrender.com${film.img}`} alt="" />
            <StyledFilmInfo.FilmInfo>
                <StyledFilmInfo.FilmGenre>{film.genres[0]}</StyledFilmInfo.FilmGenre>
                <StyledFilmInfo.FilmContry>{film.country.name}</StyledFilmInfo.FilmContry>
            </StyledFilmInfo.FilmInfo>
        </StyledFilmInfo.CoverContainer>
    )
}

export default Cover;