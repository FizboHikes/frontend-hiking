import React, { Component } from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';
import AuthService from '../services';
import Login from '../components/login'


class GuestNavMenu extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()

  }

  render() {
    console.log("This is the props authenticated");
    console.log(this.props.authenticated)

    return(
      <div>


      <Navbar className="Navbar">
      <Navbar.Header>
        <Navbar.Brand pullLeft>
          <a href="/home">HikeVentures</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text pullRight>
        </Navbar.Text>
        <Navbar.Text pullRight></Navbar.Text>

        <Login refresh={this.props.refresh}/>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
  }
}

export default GuestNavMenu;