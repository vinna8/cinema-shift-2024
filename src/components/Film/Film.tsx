import ChoicePlace from './ChoicePlace';
import Timetable from './Timetable';
import SelectedFilm from './SelectedFilm';
import BackButton from '../UI-kit/BackButton';
import * as StyledFilm from '../../style/StyledFilm';

const Film = () => {
    return (
        <>
            <BackButton />
            <SelectedFilm />
            <StyledFilm.TimeTableContainer>
                <Timetable />
                <ChoicePlace/>
            </StyledFilm.TimeTableContainer>
        </>
    )
}

export default Film;