import * as StyledFilm from '../../style/StyledFilm';
import Button from '../UI-kit/Button';

const SelectedPlace = () => {
    return (
        <>
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
        </>
    )
}

export default SelectedPlace;