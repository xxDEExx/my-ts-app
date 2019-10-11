import { styled } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

interface IHeader {
    theme: Theme
}

export const Header = styled('h1')(({ theme }: IHeader) => ({
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    margin: `0 0 ${theme.spacing(3)}px`,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    "& svg": {
        float: 'left',
        marginRight: theme.spacing(1)
    }
}));