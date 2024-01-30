import Rating from "../Rating/Rating";
import * as StyledPoster from '../Poster/StyledPoster'
import Cover from "../Film/Cover";

const Poster = () => {
    return (
        <StyledPoster.PosterContainer>
            <Cover />
            <div>
                <StyledPoster.PosterTitleFilm>Title</StyledPoster.PosterTitleFilm>
                <StyledPoster.PosterSubtitleFilm>Subtitle</StyledPoster.PosterSubtitleFilm>
            </div>
            <Rating />
            <button>Подробнее</button> 
        </StyledPoster.PosterContainer>
    )
}

export default Poster;