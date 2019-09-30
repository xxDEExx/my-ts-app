import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        background: '#000000',
        color: '#FFFFFF',
        margin: '0 0 20px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        "& svg": {
            float: 'left',
            marginRight: '10px'
        },
        [theme.breakpoints.down('sm')]: {
            background: '#dddddd',
            color: '#000000'
        }
    }
}));

export default useStyles;
