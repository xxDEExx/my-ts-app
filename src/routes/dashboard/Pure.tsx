import React, { Fragment, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import classNames from 'classnames';

import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
// import Check from '@material-ui/icons/Check';

import useStyles from './styles';

interface IProps extends RouteComponentProps<any> {
    loading: boolean,
    counter: number,
    counterAction: (val: number) => void
}

const translateId = (id: string) => `dashboard.${id}`;

const Dashboard: FC<IProps> = ({ history, loading, counter, counterAction }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <h1 className={classNames(classes.header)}>
                <Home /><span><Translate id={translateId('title')} /></span>
            </h1>
            <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/aboutUs')}
            >
                <Translate id={translateId('moveToAbout')} /><KeyboardArrowRight />
            </Button>
            <br /><br />
            <span>
                {loading ?
                    <Translate id={translateId('loading')} /> :
                    <Translate id={translateId('loaded')} />
                }
            </span><br />
            <span><b>{counter}</b></span>
            <br />
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={() => counterAction(1)}><Translate id={translateId('increment')} /></Button>
              <Button onClick={() => counterAction(-1)}><Translate id={translateId('decrement')} /></Button>
            </ButtonGroup><br /><br />
            <Button
                variant="outlined"
                color="primary"
                size="small"
            >
                Outlined Button
            </Button>
            <br /><br />
            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
            >
                Primary Button
            </Button>
            <br /><br />
            <Button
                variant="contained"
                color="secondary"
                size="large"
            >
                Secondary Button
            </Button>
            <br /><br />
            <TextField
                label="Name"
                variant="outlined"
                type="text"
                margin="dense"
            />
            <br /><br />
            <TextField
                label="Name"
                variant="outlined"
                type="text"
                error
                fullWidth
            />
            <br /><br />
            <Checkbox
                value="checkedB"
                color="primary"
                // checkedIcon={<Check />}
            />

            <p>The quick brown fox jumps over the lazy dog.</p>
        </Fragment>
    )
};
  
export default Dashboard;
