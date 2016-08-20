import React from 'react';
import '../stylesheets/Title.css';
import { testAction } from '../actions/TestAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Title extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1>GoGoGo</h1>
			</div>
		);
	}
}

export default Title