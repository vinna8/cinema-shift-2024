import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";

import { Film } from "../../types/types";
import { getFilmToday } from "../../redux/action/cinemaTodayAction";

import Poster from "./Poster";

import * as StyledPoster from '../../style/StyledPoster';
import * as StyledUIKit from '../../style/StyledUIKit';

const PosterContent: React.FC = () => {
    const dispatch = useDispatch();
    const films = useSelector(selectors.films);

    useEffect(() => {
        dispatch(getFilmToday()); 
    }, []);

    return (
        <>
            <StyledUIKit.Title>Афиша</StyledUIKit.Title>
            <StyledPoster.PosterListContainer>
                {films && films.map((film: Film) =>
                    <Poster key={film.id} film={film}/>
                )}
            </StyledPoster.PosterListContainer>
        </>
    )
}

export default PosterContent;