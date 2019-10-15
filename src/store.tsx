import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer, rootSagas } from './modules';

declare global {
    interface Window { INITIAL_REDUX_STATE: any }
}

// export const history = createBrowserHistory({
//     basename: 'manager/'
// });
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState?: any) => {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            ),
        ),
    )

    rootSagas.forEach(sagaMiddleware.run);
  
    // if ((module as any).hot) {
    //   (module as any).hot.accept('./modules', () => {
    //     store.replaceReducer(createRootReducer(history));
    //   });
    // }
  
    return store
}

const ReduxProvider = ({ children, store }: any) => <Provider store={store || configureStore()}>{children}</Provider>;

export default ReduxProvider;
