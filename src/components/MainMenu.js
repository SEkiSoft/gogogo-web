import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => (
  <div id="buttons-container" className="buttons-container">
    <Link to="/profile">
      <button id="profile" className="waves-effect waves-light btn-large cyan" type="button">
        Profile
      </button>
    </Link>
    <Link to="/play">
      <button id="play-now" className="waves-effect waves-light btn-large cyan" type="button">
        Play Now
      </button>
    </Link>
    <Link to="/findgame">
      <button id="find-game" className="waves-effect waves-light btn-large cyan" type="button">
        Find a custom game
      </button>
    </Link>
  </div>
);

export default MainMenu;
