import React, { Component } from 'react';
import App from './App.js'

export default class Parent extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }

  render() {
    console.log("I'm the parent", this.state.user.email)
    return(
      <App user={this.state.user} setUser={this.setUser} />
    )
  }
  setUser = (user) => {
    console.log(user)
    this.setState({user})
  }
}
