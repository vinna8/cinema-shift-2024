import ChoicePlace from './ChoicePlace';
import Timetable from './Timetable';
import SelectedFilm from './SelectedFilm';
import BackButton from '../UI-kit/BackButton';
import * as StyledFilm from '../../style/StyledFilm';
import * as selectors from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Film: React.FC = () => {
    const navigate = useNavigate(); 
    const film = useSelector(selectors.film);

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