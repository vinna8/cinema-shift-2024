import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../redux/selectors";

import { getFilm } from '../../redux/action/filmByIdAction';
import { getSchedule } from '../../redux/action/scheduleFilm';

import ChoicePlace from './ChoicePlace';
import Timetable from './Timetable';
import SelectedFilm from './SelectedFilm';
import BackButton from '../UI-kit/BackButton';

import * as StyledFilm from '../../style/StyledFilm';

const Film: React.FC = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const { id } = useParams(); 
    const film = useSelector(selectors.film);

    useEffect(() => {
        if (id) {
            dispatch(getFilm(id));
            dispatch(getSchedule(id));
        }
    }, []);

    const handleButtonClick = () => {
        navigate(`/poster`);
    }

    return (
        film && <>
            <BackButton onClick={handleButtonClick}/>
            <SelectedFilm film={film}/>
            <StyledFilm.TimeTableContainer>
                <Timetable />
                <ChoicePlace />
            </StyledFilm.TimeTableContainer>
        </>
    )
}

export default Film;