import http, { getToken } from '../';

describe('http', () => {
    it("request without token", () => {
        expect(getToken()).toEqual('');
    });

    it("request with token", () => {
        Object.defineProperty(window, 'localStorage', {
            value: { token: 'token' },
        });

        expect(getToken()).toEqual('Bearer token');
    });

    it("interceptors, request (with Authorization)", () => {
        const requestConfig = {
            data: 'foo', headers: { Authorization: 'test' }
        };
        expect(http.interceptors.request.handlers[0].fulfilled(requestConfig)).toBe(requestConfig);

        const requestReject = {
            response: 'Error Data'
        };
        expect(http.interceptors.request.handlers[0].rejected(requestReject)).rejects.toMatchObject(requestReject);
    });

    it("interceptors, request (without Authorization)", () => {
        const requestConfig = {
            data: 'foo', headers: {}
        };
        expect(http.interceptors.request.handlers[0].fulfilled(requestConfig)).toBe(requestConfig);

        const requestReject = {
            response: 'Error Data'
        };
        expect(http.interceptors.request.handlers[0].rejected(requestReject)).rejects.toMatchObject(requestReject);
    });

    it("interceptors, response", () => {
        expect(http.interceptors.response.handlers[0].fulfilled({data: 'foo'})).toBe('foo')

        const responseReject = {
            response: {
                statusText: 'NotFound',
                status: 404,
                data: {message: 'Page not found'}
            }
        };

        expect(http.interceptors.response.handlers[0].rejected(responseReject)).rejects.toMatchObject(responseReject)
    });
});