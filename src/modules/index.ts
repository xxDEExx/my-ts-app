import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import * as App from './app';

export interface IAllState {
	app: App.IState,
	router: RouterState
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: App.reducer,
		router: connectRouter(history)
	})

export const rootSagas = [
	App.rootSaga
]
