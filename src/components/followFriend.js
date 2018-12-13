import React, { Component } from 'react';
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
      <form onSubmit={this.handleFollow}>
        <input className="followFriendInput" value={this.state.email} placeholder="Add a friend" onChange={this.handleChange} required/>
        <button className="btn btn-success">Follow Hiker</button>
      </form>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({email: e.target.value})
  }

  handleFollow = () => {
    followFriend(this.state, this.props.userId)
      .then(resp => {
        console.log(resp);
      })
  }


}
