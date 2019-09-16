import React, { SFC, Fragment, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import config from 'config';

import theme, { useStyles } from 'themes';
import Route from 'routes';

const App: SFC = () => {
	useStyles();

	useEffect(() => {
		document.title = config.title;
	});

	return (
		<Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Route />
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
