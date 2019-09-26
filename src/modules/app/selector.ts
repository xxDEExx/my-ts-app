import { createSelector } from 'reselect';
import { IAllState } from '../';

const counterSelector = (state: IAllState) => state.app.counter;
export const getCounter = createSelector([ counterSelector ], counter => counter);

const loadingSelector = (state: IAllState) => state.app.loading;
export const getLoading = createSelector([ loadingSelector ], loading => loading);
