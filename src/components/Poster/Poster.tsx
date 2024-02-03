import Rating from "../FilmInfo/Rating/Rating";
import * as StyledPoster from '../../style/StyledPoster';
import Cover from "../FilmInfo/Cover";
import Button from "../UI-kit/Button";
import FilmName from "../FilmInfo/FilmName";
import { Film } from "../../types/types";
import { useDispatch } from "react-redux";
import { getFilm } from "../../redux/action/filmByIdAction";
import { useNavigate } from 'react-router-dom';
import { getSchedule } from "../../redux/action/scheduleFilm";

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