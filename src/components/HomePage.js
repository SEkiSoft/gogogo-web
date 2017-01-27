import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/Login.scss';
import SideMenu from './SideMenu'
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  openModal () {

  }

  goToUserPage() {
    console.log('this');
  }


  render() {
    return (
      <div>
        <div className="home-page-container">
          <SideMenu />
        </div>
      </div>
    );
  }

}

export default HomePage;