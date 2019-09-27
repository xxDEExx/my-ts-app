import React, { SFC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { routing } from 'config';
import Forbidden from './others/403';

interface IProps {
    component: new (props: any) => React.Component,
    isAuthenticated?: boolean,
    isPrivate?: boolean,
    route: string,
    role: string,
    path: string,
    exact?: boolean,
    redirect?: new (props: any) => React.Component
}

const SecureRoute: SFC<IProps> = ({
    component: Component,
    isAuthenticated, isPrivate,
    role,
    route,
    redirect: RedirectPage = Redirect,
    ...rest
}) => (
    <Route
        {...rest}
        render={ () => (
            isAuthenticated ?
                isPrivate ?
                    routing[route].access.indexOf(role) >= 0 ?
                        <Component /> : <Forbidden />
                    : <RedirectPage to='/' />
                :
                isPrivate ?
                    <RedirectPage to={routing.login.path} /> : <Component />
        )}
    />
)

SecureRoute.defaultProps = {
	isPrivate: false,
    isAuthenticated: false,
    exact: true
};

export default SecureRoute;
