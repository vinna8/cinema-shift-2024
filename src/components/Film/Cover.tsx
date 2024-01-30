import * as StyledFilm from '../Film/StyledFilm'

const Cover = () => {
    return (
        <StyledFilm.FilmContainer>
            <StyledFilm.FilmImage src="" alt="" />
            <StyledFilm.FilmInfo>
                <StyledFilm.FilmGenre>фантастика</StyledFilm.FilmGenre>
                <StyledFilm.FilmContry>США, 2023</StyledFilm.FilmContry>
            </StyledFilm.FilmInfo>
        </StyledFilm.FilmContainer>
    )
}

export default Cover;