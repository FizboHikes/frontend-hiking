import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import AuthService from '../services';
import GuestNavMenu from './guestnavmenu';



class NavMenu extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()

  }

  render() {
    console.log("This is the props.user. in navmenu :", this.props.user)
    return(
      <Navbar className="Navbar">
      <Navbar.Header>
        <Navbar.Brand pullLeft>
          <a href="/home">HikeVentures</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text pullRight>
          Logged In as:{(this.props.user.email) ? this.props.user.email : "Fizbo"}
        </Navbar.Text>
        <Navbar.Text> <a href="/dashboard"> My Dashboard  </a> </Navbar.Text>

        <Navbar.Text> <a href="/hikes/new"> Create Hike  </a> </Navbar.Text>
        <Navbar.Text> <a onClick={this.handleClick.bind(this)} href="/home"> Log Out </a> </Navbar.Text>
        <Navbar.Text pullRight></Navbar.Text>

      </Navbar.Collapse>
    </Navbar>
  )}

  handleClick = () => {
    this.auth.logout()
    this.props.statusUpdate()
  }
}

export default NavMenu;
