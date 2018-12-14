import React, { Component } from 'react';
import { followFriend } from '../api'


export default class FollowFriend extends Component {
  constructor(props){
    super(props)
    this.state= {
      email: '',
      formSuccess: "",
      errorMessage: {}
    }
  }
  render() {


    return (
      <div>
        {(Object.keys(this.state.errorMessage).length > 0) ?
          this.Capitalize(this.state.errorMessage.friend_id[0]) :
          this.state.formSuccess
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
          this.setState({
            formSuccess: "Hiker Successfully Followed",
            errorMessage: {}
          })
        }else{
          console.log("HANDLEFOLLOW ERROR RESP", resp)
          this.setState({
            errorMessage: resp.errors
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
