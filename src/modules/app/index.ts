import { createReducer, createAction } from 'redux-act';
import { put, takeEvery, delay } from 'redux-saga/effects';
import { AnyAction } from 'redux';

export * from './selector';

export const COUNTER_ACTION = createAction('app/COUNTER_ACTION');
export const COUNTER_UPDATE_ACTION = createAction<number>('app/COUNTER_UPDATE_ACTION');

export interface IState {
	readonly counter: number,
	readonly loading: boolean
}

const initialState: IState = {
	counter: 0,
	loading: false
}

export const reducer = createReducer<IState>({}, initialState);

reducer.on(COUNTER_ACTION, (state) => ({
	...state,
	loading: !state.loading
}));

reducer.on(COUNTER_UPDATE_ACTION, (state, payload) => ({
	...state,
	loading: !state.loading,
	counter: state.counter + payload
}));

export function * counterSaga({ payload }: AnyAction) {
	yield delay(500);
	yield put(COUNTER_UPDATE_ACTION(payload));
}

export const rootSaga = function * () {
	yield takeEvery(COUNTER_ACTION, counterSaga);
}
