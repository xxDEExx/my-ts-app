import React, { SFC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { routing } from 'config';

interface IProps {
    component: new (props: any) => React.Component,
    isAuthenticated?: boolean,
    isPrivate?: boolean,
    route: string,
    role: string,
    path: string,
    exact?: boolean,
    mockRedirect?: any
}

const SecureRoute: SFC<IProps> = ({ component: Component, isAuthenticated, isPrivate, role, route, mockRedirect, ...rest}) => {
    const RedirectPage = mockRedirect || Redirect;
    return (
        <Route
            {...rest}
            render={ () => (
                isAuthenticated ?
                    isPrivate ?
                        routing[route].access.indexOf(role) >= 0 ?
                            <Component /> : <RedirectPage to={routing.forbidden.path} />
                        : <RedirectPage to='/' />
                    :
                    isPrivate ?
                        <RedirectPage to={routing.login.path} /> : <Component />
            )}
        />
    )
}

SecureRoute.defaultProps = {
	isPrivate: false,
    isAuthenticated: false,
    exact: true
};

export default SecureRoute;
