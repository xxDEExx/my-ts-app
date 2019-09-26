import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { IAllState } from 'modules';

import {
	COUNTER_ACTION,
	getCounter,
	getLoading
} from 'modules/app';

import Pure from './Pure';

const mapStateToProps = (state: IAllState) => ({
	loading: getLoading(state),
	counter: getCounter(state)
})

const mapDispatchToProps = {
	counterAction: COUNTER_ACTION
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Pure)
);
