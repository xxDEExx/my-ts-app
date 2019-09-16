import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { IAllState } from 'modules';

import {
	FETCH_PEOPLE_ACTION,
} from 'modules/starWars';

import Pure from './Pure';

const mapStateToProps = (state: IAllState) => ({
	loading: state.starWars.loading,
	counter: state.app.counter,
	people: state.starWars.people
})

const mapDispatchToProps = {
	fetchPeople: FETCH_PEOPLE_ACTION
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Pure)
);
