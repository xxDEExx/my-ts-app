import { disbatch } from 'redux-act';

import { store } from 'store';
import { 
    FETCH_PEOPLE_ACTION,
    FETCH_PEOPLE_UPDATE_ACTION,
    fetchPeopleSaga
} from '../starWars';

describe('starWars module', () => {
    it("trigger Actions", () => {
        disbatch(store, FETCH_PEOPLE_ACTION(), FETCH_PEOPLE_UPDATE_ACTION([]));
    });

    it("fetchPeopleSaga", () => {
        const response = { results: [ { name: 'Person Name' } ] };
        const gen = fetchPeopleSaga();
        gen.next();
        gen.next(response);
        expect(gen.next(response).done).toBeTruthy();
    })

    it("fetchPeopleSaga, with error", () => {
        const gen = fetchPeopleSaga();
        gen.next();
        gen.next();
        expect(gen.next().done).toBeTruthy();
    })
});
