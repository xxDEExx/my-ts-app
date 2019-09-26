import { createSelector } from 'reselect';
import { IAllState } from '../';

const peopleSelector = (state: IAllState) => state.starWars.people;
export const getPeople = createSelector([ peopleSelector ], people => people);

const loadingSelector = (state: IAllState) => state.starWars.loading;
export const getLoading = createSelector([ loadingSelector ], loading => loading);
