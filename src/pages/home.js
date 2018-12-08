import React, { Component } from 'react';
import '../App.css';
import { Jumbotron } from 'react-bootstrap';
import RegisterForm from '../components/registerForm'
import LoginForm from '../components/loginForm'
import GuestNavMenu from '../components/guestnavmenu'
import '../assets/home.css'

class Home extends Component {
  render() {
    return (
      <div>
      <GuestNavMenu setUser={this.props.setUser}/>
      <Jumbotron>
        <div className="missionStatement">
          ShareHike’s mission is to connect with your friends and family through your personal hiking adventure.

            - Share your private hikes with your close friends.
            - Share experiences through tips and photos.
            - Find new trails and expand your private collection.
        </div>
      </Jumbotron>
      <RegisterForm />
      </div>
    );
  }
}

export default Home;
