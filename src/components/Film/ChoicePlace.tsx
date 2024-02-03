import { useSelector } from 'react-redux';
import * as selectors from "../../redux/selectors";

import CinemaHall from './CinemaHall';
import SelectedPlace from './SelectedPlace'

import * as StyledFilm from '../../style/StyledFilm';
import * as StyledUIKit from '../../style/StyledUIKit';


const ChoicePlace: React.FC = () => {
    const selectedSeance = useSelector(selectors.seance); 

    return (
        <>
            <StyledUIKit.Title>Выбор места</StyledUIKit.Title>
            <StyledFilm.ChoicePlaceContainer>
                <CinemaHall seance={selectedSeance}/>
                <SelectedPlace />
            </StyledFilm.ChoicePlaceContainer>
        </>
    )
}

export default ChoicePlace;