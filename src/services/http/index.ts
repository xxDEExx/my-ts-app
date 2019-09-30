import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
// localStorage.setItem('token', '12343adsfad123');

export const getToken = () => {
    if (localStorage.token) return `Bearer ${localStorage.token}`;
    return '';
}

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
	}
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
    if (localStorage.token && !config.headers.Authorization) {
        config.headers['Authorization'] = getToken();
    }
    return config;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

http.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

export default http;
