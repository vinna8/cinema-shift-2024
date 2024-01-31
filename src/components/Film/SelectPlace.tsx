import * as StyledFilm from '../Film/StyledFilm';
import * as StyledPoster from '../Poster/StyledPoster';
import Rating from '../Rating/Rating';
import Button from '../UI-kit/Button';
import CinemaHall from './CinemaHall';
import Cover from './Cover';
import Timetable from './Timetable';

const SelectedPlace = () => {
    return (
        <>
            <StyledFilm.Title>Выбор места</StyledFilm.Title>
            <StyledFilm.PlaceContainer>
                <CinemaHall />
                <StyledFilm.SelectedPlaceContainer>
                    <div>
                        <div>Зал</div>
                        <div>Синий</div>
                    </div>
                    <div>
                        <div>Дата и время</div>
                        <div>3 июля 13:45</div>
                    </div>
                    <div>
                        <div>Места</div>
                        <div>2 ряд - 8, 9</div>
                    </div>
                    <div>Сумма:</div>
                    <Button text="Купить"/>
                </StyledFilm.SelectedPlaceContainer>
            </StyledFilm.PlaceContainer>
        </>
    )
}

export default SelectedPlace;