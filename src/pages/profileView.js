import React, { Component } from 'react';
import '../App.css';
import Register from '../components/register'
import Login from '../components/login'
import NavMenu from '../components/navmenu'

class Profile extends Component {
  render() {
    return (
      <div>
      <NavMenu />
      This is the profile view page.
      </div>
    );
  }
}

export default Profile;
