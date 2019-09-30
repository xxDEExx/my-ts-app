import { createReducer, createAction } from 'redux-act';
import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchStarWarsPeople } from './api';

export * from './selector';

export interface IState {
    readonly loading: boolean,
    readonly people: any[]
}

const initialState: IState = {
    loading: false,
    people: []
}

/* ACTIONS */
export const FETCH_PEOPLE_ACTION = createAction('starWars/FETCH_PEOPLE_ACTION');
export const FETCH_PEOPLE_UPDATE_ACTION = createAction<any[]>('starWars/FETCH_PEOPLE_UPDATE_ACTION');
/* ACTIONS END */

/* REDUCER */
export const reducer = createReducer<IState>({}, initialState);

reducer.on(FETCH_PEOPLE_ACTION, state => ({
    ...state,
	loading: !state.loading
}));

reducer.on(FETCH_PEOPLE_UPDATE_ACTION, (state, payload) => ({
    ...state,
    loading: !state.loading,
    people: payload
}));
/* REDUCER END */

export function * fetchPeopleSaga() {
    try {
        const { results } = yield call(fetchStarWarsPeople);
        yield put(FETCH_PEOPLE_UPDATE_ACTION(results));
    } catch(e) {
        yield put(FETCH_PEOPLE_UPDATE_ACTION([]));
    }
}

export const rootSaga = function * () {
	yield takeEvery(FETCH_PEOPLE_ACTION, fetchPeopleSaga);
}
