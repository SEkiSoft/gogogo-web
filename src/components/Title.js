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
}

export default Title;
