import React, { SFC, Fragment, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { PAGE_TITLE } from 'config';

import theme, { useStyles } from 'themes';
import Route from 'routes';

const App: SFC = () => {
	useStyles();

	useEffect(() => {
		document.title = PAGE_TITLE;
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
