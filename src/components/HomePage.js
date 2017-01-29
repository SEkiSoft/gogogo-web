import React, { Component } from 'react';
import '../stylesheets/Login.scss';
import MainMenu from './MainMenu';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {

  }

  goToUserPage() {

  }


  render() {
    return (
      <div className="container">
        <div className="home-page-container">
          <MainMenu />
        </div>
      </div>
    );
  }

}

export default HomePage;
