import { Dispatch } from 'redux';
import { getScheduleFilm } from '../../api/cinema/film/schedule/getScheduleFilm';
import { Schedule, Seance, SelectedPlaces } from "../../types/types";
import { GET_SCHEDULE_FILM, SET_SELECTED_PLACES, SET_SELECTED_SEANCE } from "../types";

interface ScheduleFilmAction {
    type: typeof GET_SCHEDULE_FILM;
    payload: Schedule;
}

const scheduleFilm = (schedules: Schedule): ScheduleFilmAction => ({
    type: GET_SCHEDULE_FILM,
    payload: schedules
});

export const getSchedule = (filmId: string) => {
    return (dispatch: Dispatch<ScheduleFilmAction>) => {
        getScheduleFilm(filmId)
            .then(response => {
                const schedules = response.data.schedules;
                console.log(schedules)
                dispatch(scheduleFilm(schedules));
            })
            .catch(e => {
                console.log(e)
            })
    }
}

interface SelectedSeanceAction {
    type: typeof SET_SELECTED_SEANCE;
    payload: Seance;
}

const selectedSeance = (seance: Seance): SelectedSeanceAction => ({
    type: SET_SELECTED_SEANCE,
    payload: seance
});

export const setSelectedSeance = (seance: any) => {
    return (dispatch: Dispatch<SelectedSeanceAction>) => {
        console.log(seance)
        dispatch(selectedSeance(seance));
    }
}

interface SelectedPlacesAction {
    type: typeof SET_SELECTED_PLACES;
    payload: SelectedPlaces;
}

const selectedPlaces = (places: SelectedPlaces): SelectedPlacesAction => ({
    type: SET_SELECTED_PLACES,
    payload: places
});

export const setPlaces = (places: any) => {
    return (dispatch: Dispatch<SelectedPlacesAction>) => {
        console.log(places)
        dispatch(selectedPlaces(places));
    }
}