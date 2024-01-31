import Rating from "../Rating/Rating";
import * as StyledPoster from '../Poster/StyledPoster'
import Cover from "../Film/Cover";
import Button from "../UI-kit/Button";

const Poster = () => {
    return (
        <StyledPoster.PosterContainer>
            <Cover />
            <div>
                <StyledPoster.PosterTitleFilm>Title</StyledPoster.PosterTitleFilm>
                <StyledPoster.PosterSubtitleFilm>Subtitle</StyledPoster.PosterSubtitleFilm>
            </div>
            <Rating />
            <Button text="Подробнее" />
        </StyledPoster.PosterContainer>
    )
}

export default Poster;