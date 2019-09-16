import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import * as App from './app';
import * as StarWars from './starWars';

export interface IAllState {
	app: App.IState,
	starWars: StarWars.IState,
	router: RouterState
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: App.reducer,
		starWars: StarWars.reducer,
		router: connectRouter(history)
	})

export const rootSagas = [
	App.rootSaga,
	StarWars.rootSaga
]
