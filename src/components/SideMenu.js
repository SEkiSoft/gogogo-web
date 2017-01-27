import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SideMenu = ({}) => (

    <div className="col-md-3">
      <div className="btn-group-vertical side-buttons-container">
        <button className="btn side-menu-button" type="button">
          Username
        </button>
        <button className="side-menu-button btn" type="button">
          Play now
        </button>
        <button className="side-menu-button btn" type="button">
          Find a custom game
        </button>
      </div>
    </div>
);

export default SideMenu;