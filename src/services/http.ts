import axios, { AxiosResponse, AxiosError } from 'axios';

export const getToken = () => {
    if (localStorage.token) return `Bearer ${localStorage.token}`;
    return '';
}

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken()
	}
});

http.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

export default http;
