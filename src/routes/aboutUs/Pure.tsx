import React, { SFC, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import { Header } from './styles';

const translateId = (id: string) => `aboutUs.${id}`;

interface IProps {
    fetchPeople: () => void,
    loading: boolean,
    people: any[]
}

const peopleList = (people: any[]) => {
    return people.map((person, key: number) => <Fragment key={`person${key}`}><span>{person.name}</span><br /></Fragment>)
}

const AboutUs: SFC<IProps> = ({ fetchPeople, loading, people }) => (
    <div>
        <Header>
            <Info /><Translate id={translateId('title')} />
        </Header>
        <Link to="/"><Translate id={translateId('moveToDashboard')} /></Link>
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
