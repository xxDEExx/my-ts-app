import React, { SFC } from 'react';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { RouteComponentProps } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import { Header } from './styles';

const translateId = (id: string) => `aboutus.${id}`;

const AboutUs: SFC<RouteComponentProps> = ({ history }) => (
    <div>
        <Header>
            <Info /><Translate id={translateId('title')} />
        </Header>
        <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/')}
        >
            <KeyboardArrowRight /> <Translate id={translateId('moveToDashboard')} />
        </Button>
    </div>
);
  
export default AboutUs;
