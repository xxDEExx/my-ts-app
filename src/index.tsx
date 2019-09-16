import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import * as serviceWorker from 'serviceWorker';
import ReduxProvider from 'store';
import LocalizeProvider from 'config/locale/Provider';
import App from 'App';

const history = createBrowserHistory();

const renderToDOM = () => {
    if (document.getElementById('root')) {
        ReactDOM.render(
            <ReduxProvider>
                <LocalizeProvider>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </LocalizeProvider>
            </ReduxProvider>,
            document.getElementById('root')
        );
    }
}

renderToDOM();

export { renderToDOM };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
