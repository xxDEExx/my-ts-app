import http from 'services/http';

export const fetchStarWarsPeople = () => {
    const options = {
        headers: {
            'accept': '*/*'
        }
    }
    return http.get('people', options);
}
