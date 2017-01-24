import React, { PropTypes } from 'react';
import '../stylesheets/Title.scss';

class Title extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Go Go Go</h1>
        {this.props.children}
      </div>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
