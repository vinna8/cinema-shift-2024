import { Dispatch } from 'redux';
import { getFilmById } from '../../api/cinema/film/getFilmById';
import { Film } from "../../types/types";
import { GET_FILM_BY_ID } from "../types";

interface FilmByIdAction {
    type: typeof GET_FILM_BY_ID;
    payload: Film;
}

const filmById = (film: Film): FilmByIdAction => ({
    type: GET_FILM_BY_ID,
    payload: film
});

export const getFilm = (filmId: string) => {
    return (dispatch: Dispatch<FilmByIdAction>) => {
        getFilmById(filmId)
            .then(response => {
                const film = response.data.film;
                console.log(film)
                dispatch(filmById(film));
            })
            .catch(e => {
                console.log(e)
            })
    }
}