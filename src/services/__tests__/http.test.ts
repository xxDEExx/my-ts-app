import http, { getToken } from '../http';

describe('http', () => {
    it("getToken, valid", () => {
        Object.defineProperty(window, 'localStorage', {
            value: { token: 'token' },
        });

        expect(getToken()).toEqual('Bearer token');
    });

    it("interceptors", () => {
        expect(http.interceptors.response.handlers[0].fulfilled({data: 'foo'})).toBe('foo')

        const data = {
            response: {
                statusText: 'NotFound',
                status: 404,
                data: {message: 'Page not found'}
            }
        };

        expect(http.interceptors.response.handlers[0].rejected(data)).rejects.toMatchObject(data)
    });
});