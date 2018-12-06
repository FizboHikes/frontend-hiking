import React, { Component } from 'react';
import '../App.css';
import { Jumbotron } from 'react-bootstrap';
import Register from '../components/register'
import Login from '../components/login'

class Home extends Component {
  render() {
    return (
      <div>
      <Login />
      <Register />
      <Jumbotron>
        <div className="missionStatement">
          ShareHike’s mission is to connect with your friends and family through your personal hiking adventure.

            - Share your private hikes with your close friends.
            - Share experiences through tips and photos.
            - Find new trails and expand your private collection.
        </div>
      </Jumbotron>
      </div>
    );
  }
}

export default Home;
