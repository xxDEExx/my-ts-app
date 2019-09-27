import React, { SFC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routing, USER_TYPE } from 'config';
import SecureRoute from './SecureRoute';

import NotFound from './others/404';

const RouteComponent: SFC = () => (
	<Switch>
		{Object.keys(routing).map((route: string, key: number) => {
			const { path, isPrivate, component = '' } = routing[route];
			return (
				<SecureRoute
					path={path}
					component={component}
					isAuthenticated={true}
					role={USER_TYPE.ADMIN}
					route={route}
					isPrivate={isPrivate}
					key={`routeKey${key}`}
				/>
			);
		})}
		<Route component={NotFound} />
	</Switch>
)

export default RouteComponent;
