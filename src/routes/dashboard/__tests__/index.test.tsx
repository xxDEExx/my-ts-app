import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';

import { WrapperProvider } from 'index';
import { locale } from 'config/locale/index';
import theme from 'themes';

import Dashboard from '../';

const renderComponent = (props = {}) => {
    const defaultProps = {
        ...props
    };

    return render(
        <WrapperProvider>
            <ThemeProvider theme={theme}>
                <Dashboard {...defaultProps} />
            </ThemeProvider>
        </WrapperProvider>
    );
}

const { dashboard } = locale;

describe('Dashboard', () => {
    afterEach(cleanup);

    test('render with no issue', () => {
        const { getByText } = renderComponent();
        getByText(dashboard.title[0]);
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
