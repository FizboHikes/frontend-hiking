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
              <a href="/home"><img style={{height: 70, marginTop: -28}} src={require('../assets/fizbologo.png')} /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Navbar.Text pullRight>
          </Navbar.Text>
          <Navbar.Text pullRight></Navbar.Text>
            <LoginForm setUser={this.props.setUser}/>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
  }
}

export default GuestNavMenu;
