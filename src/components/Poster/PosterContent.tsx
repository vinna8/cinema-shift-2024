import Poster from "./Poster";
import * as StyledPoster from '../../style/StyledPoster';
import * as StyledUIKit from '../../style/StyledUIKit';

const PosterContent = () => {
    return (
        <>
            <StyledUIKit.Title>Афиша</StyledUIKit.Title>
            <StyledPoster.PosterListContainer>
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
            </StyledPoster.PosterListContainer>
        </>
    )
}

export default PosterContent;