import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IFilm } from '../types/types';

export const instance: AxiosInstance = axios.create({
    baseURL: 'https://shift-backend.onrender.com',
    headers: {}
});

export const getPoster = async(): Promise<IFilm[]> => {
    const response: AxiosResponse<IFilm[]> = await instance.get('/cinema/today')
    console.log(response.data)
    
    return response.data
}