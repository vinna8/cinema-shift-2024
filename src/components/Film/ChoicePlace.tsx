import * as StyledFilm from '../../style/StyledFilm';
import * as StyledUIKit from '../../style/StyledUIKit';
import CinemaHall from './CinemaHall';
import SelectedPlace from './SelectedPlace';

const ChoicePlace = () => {
    return (
        <>
            <StyledUIKit.Title>Выбор места</StyledUIKit.Title>
            <StyledFilm.PlaceContainer>
                <CinemaHall />
                <SelectedPlace />
            </StyledFilm.PlaceContainer>
        </>
    )
}

export default ChoicePlace;