import * as StyledFilmInfo from '../../style/StyledFilmInfo';

const Cover = () => {
    return (
        <StyledFilmInfo.CoverContainer>
            <StyledFilmInfo.FilmImage src="" alt="" />
            <StyledFilmInfo.FilmInfo>
                <StyledFilmInfo.FilmGenre>фантастика</StyledFilmInfo.FilmGenre>
                <StyledFilmInfo.FilmContry>США, 2023</StyledFilmInfo.FilmContry>
            </StyledFilmInfo.FilmInfo>
        </StyledFilmInfo.CoverContainer>
    )
}

export default Cover;