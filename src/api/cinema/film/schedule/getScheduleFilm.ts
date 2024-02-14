import { Schedule } from '../../../../types/types';
import { instance } from "../../../instance";

export interface ScheduleResponse {
    success: boolean;
    data: {
        schedules: Schedule;
    }
}

export const getScheduleFilm = async(filmId: string): Promise<ScheduleResponse> => {
    return await instance.get(`/cinema/film/${filmId}/schedule`);
}