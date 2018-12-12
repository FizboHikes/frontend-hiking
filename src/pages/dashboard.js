import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'
import { Jumbotron, Carousel } from 'react-bootstrap'
import HikeCard from '../components/hikeCard'
import '../assets/dashboard.css';
import HikeList from '../components/hikeList'
import FriendsHikeList from '../components/friendsHikeList'
import AuthService from '../services'
import { getUserHikes, getProfile, getFriendHikes} from '../api'
import ProfileCard from '../components/profileCard'
import FollowFriend from '../components/followFriend'

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

    getProfile(this.state.userId)
      .then( APIUser => {
        this.setState({
          profileInfo: APIUser
        })
      })

    getFriendHikes(this.state.userId)
      .then( APIFriendHikes => {
        console.log("these are my friend's hikes", APIFriendHikes)
        this.setState({
          friendHikes: APIFriendHikes
        })
      })
  }

  render() {
    let { profileInfo } = this.state
    return (
      <div>
        <Jumbotron></Jumbotron>
        <FollowFriend userId={this.state.userId}/>
            <div className="hikesContainer">
              <div>
                <div>
                  {(this.state.successDelete) && <strong>Hike Deleted</strong> }
                  {(this.state.userHikes) && <HikeList successDelete={this.successDelete} userHikes={this.state.userHikes}/>}
                </div>
              </div>

              <div>
                <div>
                  {(this.state.friendHikes) && <FriendsHikeList friendsHikes={this.state.friendHikes}/>}
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
