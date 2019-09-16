import React from "react";
import { render, cleanup } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import ReduxProvider from 'store';
import LocalizeProvider from 'config/locale/Provider';

const history = createBrowserHistory();

import App from 'App';

const renderComponent = () => {
    return render(
        <ReduxProvider>
            <LocalizeProvider>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </LocalizeProvider>
        </ReduxProvider>
    )
}

describe('APP', () => {
    afterEach(cleanup);

    it("render with no issue", () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    })
});
