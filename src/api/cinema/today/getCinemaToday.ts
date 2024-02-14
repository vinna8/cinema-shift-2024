import { Film } from '../../../types/types';
import { instance } from "../../instance";

export interface CinemaTodayResponse {
    success: boolean;
    data: {
        films: Film[];
    }
}

export const getCinemaToday = async(): Promise<CinemaTodayResponse> => {
    return await instance.get('/cinema/today');
}