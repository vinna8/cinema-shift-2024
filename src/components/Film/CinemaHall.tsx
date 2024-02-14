import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Seance, SelectedPlaces } from '../../types/types';
import { setPlaces } from '../../redux/action/scheduleFilm';

import * as StyledFilm from '../../style/StyledFilm';

interface SeanceProps {
    seance: Seance | null;
}

const CinemaHall: React.FC<SeanceProps> = ({ seance }) => {
    const dispatch = useDispatch();
    const [activePlaces, setActivePlaces] = useState<{ [key: string]: boolean }>({});
    const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlaces>({places: [], hallName: 'Red', time: ''});

    useEffect(() => { 
        if (selectedPlaces && selectedPlaces.places.length > 0) {
            dispatch(setPlaces(selectedPlaces));
        }
    }, [selectedPlaces]);

    const handlePlaceClick = (place: any, column: number, row: number) => { 
        if (place.type !== 'BLOCKED') {
            setActivePlaces((prevActivePlaces) => ({ 
                ...prevActivePlaces,
                [place.type + column + row]: !prevActivePlaces[place.type + column + row],
            }));

            if (seance) {
                const newPlace = {
                    row: row + 1,
                    column: column + 1,
                    price: place.price,
                };
    
                setSelectedPlaces((prevSelectedPlaces) => {
                    const isPlaceSelected = prevSelectedPlaces?.places.some((p) => p.row === newPlace.row && p.column === newPlace.column);
            
                    if (isPlaceSelected) {
                        const updatedPlaces = (prevSelectedPlaces?.places || []).filter((p) => p.row !== newPlace.row || p.column !== newPlace.column);
            
                        return {
                            ...(prevSelectedPlaces || {}),
                            places: updatedPlaces,
                        };
                    } else {
                        return {
                            ...(prevSelectedPlaces || { places: [], hallName: '', time: '' }), 
                            places: [...(prevSelectedPlaces?.places || []), newPlace],
                            hallName: seance.hall.name,
                            time: seance.time,
                        };
                    }
                });
            }
    }}

    return (
        <div>
            <StyledFilm.ScreenText>Экран</StyledFilm.ScreenText>
            <StyledFilm.Screen></StyledFilm.Screen>
            <StyledFilm.RowsAndPlacesContainer>
                <StyledFilm.RowText>Ряд</StyledFilm.RowText>
                {seance && seance.hall.places.map((place, row) => (
                    <StyledFilm.PlaceContainer key={row}>
                        <StyledFilm.RowText>{row + 1}</StyledFilm.RowText>
                            {place.map((_, column) => (
                                <StyledFilm.Place 
                                    key={column} 
                                    type={place[column].type}
                                    onClick={() => handlePlaceClick(place[column], column, row)} 
                                    className={activePlaces[place[column].type + column + row] ? 'active' : ''}
                                >
                                    {column + 1}
                                </StyledFilm.Place>
                            ))}
                    </StyledFilm.PlaceContainer>
                ))}
            </StyledFilm.RowsAndPlacesContainer> 
        </div>
    )
}

export default CinemaHall;