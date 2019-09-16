import http from './http';

export const fetchStarWarsPeople = () => {
    return http.get('https://swapi.co/api/people');
}
