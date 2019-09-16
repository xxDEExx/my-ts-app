import React, { SFC } from 'react';
import { Switch } from "react-router-dom";

import { routing } from 'config';
import SecureRoute from './SecureRoute';

// Containers
import dashboard from 'containers/dashboard';
import aboutus from 'containers/aboutus';

// const NotFound: SFC = () => <div>Page not found!</div>;

const containers = {
	dashboard,
	aboutus
}

const RouteComponent: SFC = () => (
	<Switch>
		{Object.keys(routing).map((route: string) => {
			const { path, key, isPrivate } = routing[route];
			return (
				<SecureRoute
					path={path}
					component={containers[route]}
					isAuthenticated={true}
					role='ADMIN'
					route={route}
					isPrivate={isPrivate}
					key={`routeKey${key}`}
				/>
			);
		})}
		{/* <Route component={NotFound} /> */}
	</Switch>
)

export default RouteComponent
