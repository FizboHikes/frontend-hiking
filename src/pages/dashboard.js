import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import '../assets/dashboard.css';
import HikeList from '../components/hikeList'
import FriendsHikeList from '../components/friendsHikeList';
import AuthService from '../services';
import { getUserHikes, getProfile, getFriendHikes} from '../api';
import FollowFriend from '../components/followFriend';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService();
    this.state = {
      userHikes: [],
      userId: this.auth.getUserId(),
      successDelete: false,
      profileInfo: {},
      friendHikes: []
    }
  }

  componentDidMount(){

    getUserHikes(this.state.userId)
    .then(APIhikes => {
      this.setState({
        userHikes: APIhikes
      })
    })
    .catch(error => console.log("This is error message from getUSerHikes", error))

    getProfile(this.state.userId)
      .then( APIUser => {
        this.setState({
          profileInfo: APIUser
        })
      })
      .catch(error => console.log(error))


    getFriendHikes(this.state.userId)
      .then( APIFriendHikes => {
        // console.log("these are my friend's hikes", APIFriendHikes)
        this.setState({
          friendHikes: APIFriendHikes
        })
      })
      .catch(error => console.log(error))

  }

  resetFriendHikes = () => {
    getFriendHikes(this.state.userId)
      .then( APIFriendHikes => {
        // console.log("these are my friend's hikes", APIFriendHikes)
        this.setState({
          friendHikes: APIFriendHikes
        })
      })
      .catch(error => console.log(error))

  }


  render() {
    return (
      <div>
      <div  className="image"></div>
      <div className="dashboardPage">
            <div className="hikesContainer">
              <div>
                <h1>MY HIKES </h1>
                <div>
                  {(this.state.successDelete) && <Alert className="deleteAlert" bsStyle = "success ">Hike Deleted</Alert> }
                  {(this.state.userHikes) && <HikeList successDelete={this.successDelete} userHikes={this.state.userHikes}/>}
                </div>
              </div>

              <div>
              <h1>TRAILBLAZERS I FOLLOW</h1>
              <FollowFriend userId={this.state.userId} resetFriendHikes={this.resetFriendHikes}/>
                <div>
                  {(this.state.friendHikes) && <FriendsHikeList friendsHikes={this.state.friendHikes}/>}
                </div>
              </div>
            </div>
      </div>
      </div>
    );
  }
  successDelete = (key) => {
    delete this.state.userHikes[key];
    this.setState({successDelete: true})
  }


  // we can make a setInterval function or something that runs it once and then stops. or maybe a do while.
}

export default Dashboard;
