import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles({
    '@global': {
        'body': {
            padding: '10px',
            margin: '0px',
            fontSize: '14px',
        }
    }
});

export default createMuiTheme({
	palette: {
		primary: {
			main: '#0178af',
			contrastText: '#FFFFFF'
		},
		secondary: {
			main: '#ea8533',
			contrastText: '#FFFFFF'
		},
		error: red
	}
});
