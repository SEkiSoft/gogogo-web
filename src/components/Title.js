import React from 'react';
import './stylesheets/Title.css';

class Title extends React.Component {
    render() {
        return (
        	<div className='header'>
            	<h1>Go Go Go</h1>
            	{this.props.children}
            </div>
        );
    }
	
	sendAction = () => {
		this.props.actions.testAction();
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

export default Title;
