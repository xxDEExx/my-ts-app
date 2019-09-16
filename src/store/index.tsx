import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer, rootSagas } from '../modules';

declare global {
    interface Window { INITIAL_REDUX_STATE: any }
}

const history = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

rootSagas.forEach(sagaMiddleware.run);

const ReduxProvider = ({ children }: any) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
