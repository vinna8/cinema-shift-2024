import Poster from "./Poster";
import * as StyledPoster from '../Poster/StyledPoster'

const Posters = () => {
    return (
        <>
            <StyledPoster.PosterTitle>Афиша</StyledPoster.PosterTitle>
            <StyledPoster.PostersContainer>
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
            </StyledPoster.PostersContainer>
        </>
    )
}

export default Posters;