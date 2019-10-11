import { disbatch } from 'redux-act';

import { configureStore } from 'store';
import { 
    COUNTER_ACTION,
    COUNTER_UPDATE_ACTION,
    counterSaga
} from '../';

describe('app module', () => {
    it("trigger Actions", () => {
        disbatch(configureStore(), COUNTER_ACTION(), COUNTER_UPDATE_ACTION(1));
    });

    it("toggleLoadingSaga", () => {
        const gen = counterSaga(1);
        gen.next();
        gen.next();
        expect(gen.next().done).toBeTruthy();
    })
});
