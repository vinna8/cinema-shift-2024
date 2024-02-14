import axios, { AxiosInstance } from "axios";

const BASE_URL = 'https://shift-backend.onrender.com';

export const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {}
});