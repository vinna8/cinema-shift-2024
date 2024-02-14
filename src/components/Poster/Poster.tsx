import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { Film } from "../../types/types";
import { getFilm } from "../../redux/action/filmByIdAction";
import { getSchedule } from "../../redux/action/scheduleFilm";

import Rating from "../FilmInfo/Rating/Rating";
import Cover from "../FilmInfo/Cover";
import Button from "../UI-kit/Button";
import FilmName from "../FilmInfo/FilmName";

import * as StyledPoster from '../../style/StyledPoster';

interface PosterProps {
    film: Film;
}

const Poster: React.FC<PosterProps> = ({ film }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        dispatch(getFilm(film.id));
        dispatch(getSchedule(film.id));
        navigate(`/film/${film.id}`);
    }

    return (
        <StyledPoster.PosterContainer>
            <Cover film={film}/>
            <FilmName film={film} fontSize="20px"/>
            <Rating film={film}/>
            <Button onClick={handleButtonClick}>Подробнее</Button>
        </StyledPoster.PosterContainer>
    )
}

export default Poster;