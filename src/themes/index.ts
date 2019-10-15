import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    '@global': {
        'body': {
            padding: theme.spacing(),
            margin: 0,
			[theme.breakpoints.down('sm')]: {
				padding: 0
			}
		}
    }
}));

const muiTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#D70F64',
			dark: '#C60D5C',
			contrastText: '#FFFFFF'
		},
		secondary: {
			main: '#276FBF',
			contrastText: '#FFFFFF'
		},
		error: {
			main: '#FA7751',
			contrastText: '#FFFFFF'
		}
	},
	shape: {
		borderRadius: 0
	},
	overrides: {
		MuiTouchRipple: {
			child: {
				backgroundColor: 'rgba(0, 0, 0, 0.3)'
			}
		},
		MuiButton: {
			root: {
				// height: '48px',
				// padding: '0 15px',
				// fontWeight: 700,
				'&$outlined': {
					'&:hover': {
						background: 'none'
					}
				}
			},
			// sizeLarge: {
			// 	height: '64px',
			// 	padding: '0 31px',
			// 	fontSize: '0.875rem'
			// },
			// sizeSmall: {
			// 	height: '24px',
			// 	padding: '0 7px',
			// 	fontSize: '0.75rem'
			// },
			outlinedPrimary: {
				borderColor: '#D70F64',
				'& .MuiTouchRipple-child, & .MuiTouchRipple-childLeaving, & .MuiTouchRipple-childPulsate': {
					backgroundColor: 'rgba(215, 15, 100, 0.3)'
				}
			},
			outlinedSecondary: {
				borderColor: '#276FBF',
				'& .MuiTouchRipple-child, & .MuiTouchRipple-childLeaving, & .MuiTouchRipple-childPulsate': {
					backgroundColor: 'rgba(39, 111, 1910, 0.3)'
				}
			}
		},
		MuiOutlinedInput: {
			root: {
				"&$focused .MuiOutlinedInput-notchedOutline": {
					borderWidth: '1px'
				}
			}
		},
		// MuiCheckbox: {
		// 	root: {
		// 		'& .MuiSvgIcon-root': {
		// 			width: 0,
		// 			border: '1px solid rgba(0, 0, 0, .54)',
		// 			height: 0,
		// 			padding: '9px',
		// 			borderRadius: 0
		// 		},
		// 		'&$checked .MuiSvgIcon-root': {
		// 			width: '20px',
		// 			border: '1px solid rgba(0, 0, 0, .54)',
		// 			height: '20px',
		// 			padding: 0,
		// 			borderRadius: 0
		// 		},
		// 	}
		// }
	}
});

muiTheme.shadows = [] as unknown as Theme["shadows"];

export default muiTheme;
