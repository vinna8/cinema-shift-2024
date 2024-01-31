import * as StyledFilmInfo from '../../style/StyledFilmInfo';

const FilmName = ({fontSize}: {fontSize: string}) => {
    return (
        <div>
            <StyledFilmInfo.FilmTitle fontSize={ fontSize }>Title</StyledFilmInfo.FilmTitle>
            <StyledFilmInfo.FilmSubtitle>Subtitle</StyledFilmInfo.FilmSubtitle>
        </div>
    )
}

export default FilmName;