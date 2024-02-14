import { useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";

import Button from '../UI-kit/Button';

import * as StyledFilm from '../../style/StyledFilm';

const SelectedPlace: React.FC = () => {
    const places = useSelector(selectors.places); 

    const total = () => {
        if (!places || !places.places || places.places.length === 0) {
            return 0;
        }

        const sum = places.places.reduce((accumulator: any, currentValue: any) => {
            return accumulator + currentValue.price;
        }, 0);

        return sum;
    }

    return (
        <> 
            {places && 
                <StyledFilm.SelectedPlaceContainer>
                    <div>
                        <StyledFilm.SmallText>Зал</StyledFilm.SmallText>
                        <div>{places.hallName}</div>
                    </div>
                    <div>
                        <StyledFilm.SmallText>Дата и время</StyledFilm.SmallText>
                        <div>{places.time}</div>
                    </div>
                    {places.places && places.places.length > 0 && (
                        <div>
                            <StyledFilm.SmallText>Места</StyledFilm.SmallText>
                                {places && places.places.map((place: any, index: number) => (
                                    <span key={index}>{place.row} ряд - {place.column} </span>
                                ))}
                        </div>
                    )}
                    <StyledFilm.TotalText>Сумма: {total()}</StyledFilm.TotalText>
                    <Button>Купить</Button>
                </StyledFilm.SelectedPlaceContainer> 
            }
        </>
    )
}

export default SelectedPlace; 