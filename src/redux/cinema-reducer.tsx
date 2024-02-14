import { FilmAction, FilmState } from "../types/types"
import { GET_CINEMA_TODAY, GET_FILM_BY_ID, GET_SCHEDULE_FILM, SET_SELECTED_PLACES, SET_SELECTED_SEANCE } from "./types"

const initialState: FilmState = {
    films: [],
    film: null,
    schedules: [],
    selectedSeance: null,
    selectedPlaces: []
}

export const cinemaReducer = (state = initialState, action: FilmAction): FilmState => {
    switch (action.type) {
        case GET_CINEMA_TODAY:
            return {
                ...state,
                films: action.payload
            }
        case GET_FILM_BY_ID:
            return {
                ...state,
                film: action.payload
        }
        case GET_SCHEDULE_FILM:
            return {
                ...state,
                schedules: action.payload
            }
        case SET_SELECTED_SEANCE:
            return {
                ...state,
                selectedSeance: action.payload
            }
        case SET_SELECTED_PLACES:
            return {
                ...state,
                selectedPlaces: action.payload
            }
        default: 
            return state;
    }
}