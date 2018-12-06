import React, { Component } from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';
import AuthService from '../services';



class NavMenu extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()

  }

  render() {
    console.log("This is the props authenticated");
    console.log(this.props.authenticated)

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
          Logged In as: {(this.props.currentUser) ? this.props.currentUser : "Not logged in"}
        </Navbar.Text>
        <Navbar.Text> <a href="/dashboard"> My Dashboard  </a> </Navbar.Text>
        <Navbar.Text> <a onClick={this.handleClick.bind(this)} href="/home"> Log Out </a> </Navbar.Text>
        <Navbar.Text onClick={this.handleClick}> { (this.props.authenticated) ? "Logout" : <a href="/home"> Login </a> }
        </Navbar.Text>
        <Navbar.Text> <a href="/profile"> Profile View  </a> </Navbar.Text>
        <Navbar.Text pullRight></Navbar.Text>

      </Navbar.Collapse>
    </Navbar>
  )
  }

  handleClick = () => {
    this.auth.logout()
    this.props.statusUpdate()
  }
}

export default NavMenu;
