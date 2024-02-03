import { Dispatch } from 'redux';
import { getCinemaToday } from '../../api/cinema/today/getCinemaToday';
import { Film } from "../../types/types";
import { GET_CINEMA_TODAY } from "../types";

interface CinemaTodayAction {
    type: typeof GET_CINEMA_TODAY;
    payload: Film[];
}

const cinemaToday = (films: Film[]): CinemaTodayAction => ({
    type: GET_CINEMA_TODAY,
    payload: films
});

export const getFilmToday = () => {
    return (dispatch: Dispatch<CinemaTodayAction>) => {
        getCinemaToday()
            .then(response => {
                const films = response.data.films;
                dispatch(cinemaToday(films));
            })
            .catch(e => {
                console.log(e)
            })
    }
}