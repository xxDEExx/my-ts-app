import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';

import locale from 'config/locale/index';
import LocalizeProvider from 'config/locale/Provider';
import ReduxProvider from 'store';

import Dashboard from '../';

const renderComponent = (props = {}) => {
    const defaultProps = {
        history: {
            push: jest.fn()
        },
        ...props
    };

    return render(
        <ReduxProvider>
            <LocalizeProvider>
                <Dashboard {...defaultProps} />
            </LocalizeProvider>
        </ReduxProvider>
    );
}

const { dashboard } = locale;

describe('Dashboard', () => {
    afterEach(cleanup);

    test('render with no issue', () => {
        const { getByText } = renderComponent();
        getByText('Dashboard Page.');
        fireEvent.click(getByText(dashboard.moveToAbout[0]));
    });

    test('toggle Loading', async () => {
        const { getByText } = renderComponent();
        getByText('0');
        fireEvent.click(getByText(dashboard.increment[0]));
        await wait(() =>
            getByText('1')
        );
        fireEvent.click(getByText(dashboard.decrement[0]));
        await wait(() =>
            getByText('0')
        );
    });
});
