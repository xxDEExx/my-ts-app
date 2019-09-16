import React, { Fragment, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import classNames from 'classnames';

import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import useStyles from './styles';

interface IProps extends RouteComponentProps<any> {
    loading: boolean,
    counter: number,
    counterAction: (val: number) => void
}

const translateId = (id: string) => `dashboard.${id}`;

const Dashboard: FC<IProps> = ({ loading, counter, counterAction, history }) => {
    const classes = useStyles();

    const onClickCounter = (val: number) => {
        counterAction(val);
    }

    return (
        <Fragment>
            <h1 className={classNames(classes.header)}>
                <Home /><span><Translate id={translateId('title')} /></span>
            </h1>
            <span>
                {loading ?
                    <Translate id={translateId('loading')} /> :
                    <Translate id={translateId('loaded')} />
                }
            </span><br />
            <span><b>{counter}</b></span>
            <br />
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={() => onClickCounter(1)}><Translate id={translateId('increment')} /></Button>
              <Button onClick={() => onClickCounter(-1)}><Translate id={translateId('decrement')} /></Button>
            </ButtonGroup><br /><br />
            <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/about-us')}
            >
                <KeyboardArrowRight /> <Translate id={translateId('moveToAbout')} />
            </Button>
        </Fragment>
    )
};
  
export default Dashboard;
