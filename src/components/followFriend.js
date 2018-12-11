import React, { Component } from 'react';
import '../App.css';
import { followFriend } from '../api'

export default class FollowFriend extends Component {
  constructor(props){
    super(props)
    this.state= {
      email: ''
    }
  }
  render() {
    return (
      <div>
      <input value={this.state.email} onChange={this.handleChange}/>
      <button onClick={this.handleFollow}>Follow Hiker</button>
      </div>
    )
  }
}
