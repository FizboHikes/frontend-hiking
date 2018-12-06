import React, { Component } from 'react';
import '../App.css';
import Register from '../components/register'
import Login from '../components/login'

class Home extends Component {
  render() {
    return (
      <div>
      home page
      <Login />
      <Register />
      </div>
    );
  }
}

export default Home;
