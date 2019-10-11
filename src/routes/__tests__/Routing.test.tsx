import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';

import { WrapperProvider } from 'index';

import SecureRoute from '../SecureRoute';
import Dashboard from '../dashboard';
import theme from 'themes';

import { USER_TYPE } from 'config';

const renderComponent = (props = {}) => {
    const defaultProps = {
        component: Dashboard,
        path: '/',
        role: USER_TYPE.ADMIN,
        route: 'dashboard',
        ...props
    };

    return render(
        <WrapperProvider>
            <ThemeProvider theme={theme}>
                <SecureRoute {...defaultProps} />
            </ThemeProvider>
        </WrapperProvider>
    );
}

const mockText = 'Mock Redirect';
const redirect = (props: any) => <div>{mockText}</div>;

describe('SecureRoute', () => {
    afterEach(cleanup);

    test('render with default props', () => {
        renderComponent();
    });

    test('render private page without authorize user', async () => {
        const { getByText } = renderComponent({ isPrivate: true, redirect });
        await wait(() =>getByText('Mock Redirect'));
    });

    test('render private page with authorize user', () => {
        renderComponent({ isAuthenticated: true, isPrivate: true });
    });

    test('render private page without authorize user', async () => {
        const { getByText } = renderComponent({ role: USER_TYPE.MANAGER, isAuthenticated: true, isPrivate: true });
        await wait(() =>getByText('This page is forbidden!'));
    });

    test('render not private page with authenticated user', async () => {
        const { getByText } = renderComponent({ isAuthenticated: true, redirect });
        await wait(() =>getByText('Mock Redirect'));
    });
});
