import { Film } from '../../../types/types';
import { instance } from "../../instance";

export interface FilmByIdResponse {
    success: boolean;
    data: {
        film: Film;
    }
}

export const getFilmById = async(filmId: string): Promise<FilmByIdResponse> => {
    return await instance.get(`/cinema/film/${filmId}`);
}