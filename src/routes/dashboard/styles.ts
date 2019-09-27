import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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
        }
    }
});

export default useStyles;
