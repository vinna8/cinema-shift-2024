import Rating from "../FilmInfo/Rating/Rating";
import * as StyledPoster from '../../style/StyledPoster';
import Cover from "../FilmInfo/Cover";
import Button from "../UI-kit/Button";
import FilmName from "../FilmInfo/FilmName";

const Poster = () => {
    return (
        <StyledPoster.PosterContainer>
            <Cover />
            <FilmName fontSize="20px"/>
            <Rating />
            <Button text="Подробнее" />
        </StyledPoster.PosterContainer>
    )
}

export default Poster;