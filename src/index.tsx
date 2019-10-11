import React, { SFC } from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

import * as serviceWorker from 'serviceWorker';
import ReduxProvider, { history } from 'store';
import LocalizeProvider from 'config/locale/Provider';
import { languages } from 'config';

import App from 'App';

interface IProps {
    lang?: string
    store?: any
}

export const WrapperProvider: SFC<IProps> = ({ children, store, lang }) => (
    <ReduxProvider store={store}>
        <LocalizeProvider lang={lang}>
            <ConnectedRouter history={history}>
                {children}
            </ConnectedRouter>
        </LocalizeProvider>
    </ReduxProvider>
)

WrapperProvider.defaultProps = {
    lang: languages[0].code
};

const renderToDOM = () => {
    if (document.getElementById('root')) {
        ReactDOM.render(
            <WrapperProvider>
                <App />
            </WrapperProvider>,
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
