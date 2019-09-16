import { styled } from '@material-ui/styles';

export const Header = styled('h1')({
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
});