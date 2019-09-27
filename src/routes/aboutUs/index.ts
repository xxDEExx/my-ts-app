import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { IAllState } from 'modules';

import {
	FETCH_PEOPLE_ACTION,
	getPeople,
	getLoading
} from 'modules/starWars';

import Pure from './Pure';

const mapStateToProps = (state: IAllState) => ({
	loading: getLoading(state),
	people: getPeople(state)
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
