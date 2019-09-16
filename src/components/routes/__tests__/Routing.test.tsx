import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { WrapperProvider } from 'index';

import SecureRoute from '../SecureRoute';
import Dashboard from 'containers/dashboard';

const renderComponent = (props = {}) => {
    const defaultProps = {
        component: Dashboard,
        path: '/',
        role: 'ADMIN',
        route: 'dashboard',
        ...props
    };

    return render(
        <WrapperProvider>
            <SecureRoute {...defaultProps} />
        </WrapperProvider>
    );
}

const mockRedirect = (props: any) => <div>Mock Redirect</div>;

describe('SecureRoute', () => {
    afterEach(cleanup);

    test('render with default props', () => {
        renderComponent();
    });

    test('render private page with no authenticated user', () => {
        renderComponent({ isPrivate: true, mockRedirect });
    });

    test('render private page with authenticated user', () => {
        renderComponent({ role: 'ADMIN', isAuthenticated: true, isPrivate: true });
    });

    test('render private page with authenticated user', () => {
        renderComponent({ role: 'MANAGER', isAuthenticated: true, isPrivate: true, mockRedirect });
    });

    test('render note private page with authenticated user', () => {
        renderComponent({ isAuthenticated: true, mockRedirect });
    });
});
