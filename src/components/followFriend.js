import React, { Component } from 'react';
import { followFriend } from '../api'
import { Alert } from 'react-bootstrap'
import '../assets/dashboard.css'

export default class FollowFriend extends Component {
  constructor(props){
    super(props)
    this.state= {
      email: '',
      formSuccess: null,
      errorMessage: null
    }
  }
  render() {


    return (
      <div>
        {(this.state.errorMessage) &&
          <Alert className="followAlert" bsStyle="warning">{this.state.errorMessage}</Alert>}
          {this.state.formSuccess && <Alert className="followAlert" bsStyle="success">{this.state.formSuccess} </Alert>
        }
      <form className="followFriendForm" onSubmit={this.handleFollow}>
        <input className="followFriendInput" value={this.state.email} placeholder="Add a friend" onChange={this.handleChange} required/>
        <button className="btn btn-success" id="followFriendBtn">Follow Hiker</button>
      </form>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({email: e.target.value})
  }

  handleFollow = (e) => {
    console.log("HANDLE FOLLOW HAPPENING")
    e.preventDefault()
    followFriend(this.state, this.props.userId)
      .then(resp => {
        if(resp.success){
          console.log("HANDLEFOLLOW SUCCESS RESP", resp)
          this.props.resetFriendHikes()
          this.setState({
            formSuccess: "Hiker Successfully Followed",
            errorMessage: null
          })
        }else{
          let message;
          console.log("HANDLEFOLLOW ERROR RESP", resp)
          if (resp.errors.friend_id[0] == "has already been taken") {
            message = "Already following this hiker"
          } else if (resp.errors.friend[0] == "must exist") {
            message = "This hiker is off the grid"
          }
          this.setState({
            errorMessage: message,
            formSuccess: null
          })
        }
      })
      .catch(error => {
        console.log("HandleFollow Error!!!!!", error);
      })
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
