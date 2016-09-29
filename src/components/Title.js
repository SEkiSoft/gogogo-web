import React from 'react';
import '../stylesheets/Title.css';
import { testAction } from '../actions/TestAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Title extends React.Component {
	
	sendAction = () => {
		this.props.actions.testAction();
	}

	render() {
		const workingStore = this.props.appState.thisWorks;
		return (
			<div className='container-fluid'>
				<h1>GoGoGo App</h1>
				<button className='btn btn-default' onClick={this.sendAction}> 					
					Test Redux 
				</button>
				{workingStore &&
					<h2>Redux Works</h2>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		appState: state.TestStore
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators ({
			testAction
		}, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Title);