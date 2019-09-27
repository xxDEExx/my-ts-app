import React, { SFC, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { RouteComponentProps } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import { Header } from './styles';

const translateId = (id: string) => `aboutUs.${id}`;

interface IProps extends RouteComponentProps<any> {
    fetchPeople: () => void,
    loading: boolean,
    people: any[]
}

const peopleList = (people: any[]) => {
    return people.map((person, key: number) => <Fragment key={`person${key}`}><span>{person.name}</span><br /></Fragment>)
}

const AboutUs: SFC<IProps> = ({ history, fetchPeople, loading, people }) => (
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
        <br /><br />
        <Button
            variant="contained"
            color="secondary"
            onClick={() => fetchPeople()}
            disabled={loading}
        >
            <Translate id={translateId('fetchPeople')} />
        </Button><br /><br />
        { loading ? 'Fetching...' : peopleList(people) }
    </div>
);
  
export default AboutUs;
