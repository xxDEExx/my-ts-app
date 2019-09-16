import { counterSaga } from '../app';

describe('app module', () => {
    it("toggleLoadingSaga", () => {
        const gen = counterSaga(1);
        gen.next();
        gen.next();
        expect(gen.next().done).toBeTruthy();
    })
});