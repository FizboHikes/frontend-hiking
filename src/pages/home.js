import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import RegisterForm from '../components/registerForm'
import LoginForm from '../components/loginForm'
import GuestNavMenu from '../components/guestnavmenu'
import '../assets/home.css'

class Home extends Component {
  render() {
    return (
      <div className="homeDiv">
      <GuestNavMenu setUser={this.props.setUser}/>
      <Jumbotron>
      </Jumbotron>
      <RegisterForm setUser={this.props.setUser}/>
      </div>
    );
  }
}

export default Home;
