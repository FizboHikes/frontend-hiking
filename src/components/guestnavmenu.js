import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import LoginForm from '../components/loginForm'


class GuestNavMenu extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <Navbar className="Navbar">
          <Navbar.Header>
            <Navbar.Brand pullLeft>
              <a href="/home"><img className="coolIcon" src={require('../assets/fizbologo.png')} /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <LoginForm setUser={this.props.setUser}/>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
  }
}

export default GuestNavMenu;
