import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
        margin: `0 0 ${theme.spacing(3)}px`,
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        "& svg": {
            float: 'left',
            marginRight: theme.spacing(1)
        },
        [theme.breakpoints.down('sm')]: {
            background: '#dddddd',
            color: theme.palette.common.black
        }
    }
}));

export default useStyles;
