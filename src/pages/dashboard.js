import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'
import { Jumbotron } from 'react-bootstrap'
import HikeCard from '../components/hikeCard'
import '../App.css';
import '../assets/dashboard.css';
import HikeList from '../components/hikeList'
import AuthService from '../services'
import { getUserHikes, getProfile } from '../api'
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
      profileInfo: {}
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
  }

  render() {
    let { profileInfo } = this.state
    return (
      <div>
        <Jumbotron>
        </Jumbotron>
        {(this.state.profileInfo) && <ProfileCard profileInfo={this.state.profileInfo} />}
          <div>
          </div>
            <div className="HikeList">
              <div className="cardComponent">
              {(this.state.successDelete) && <strong>Hike Deleted</strong> }
                {(this.state.userHikes) && <HikeList successDelete={this.successDelete} userHikes={this.state.userHikes}/>}
              </div>
          </div>
          <FollowFriend/>
      </div>
    );
  }
  successDelete = () => {
    this.state.userHikes.shift()
    this.setState({successDelete: true})
  }

  // we can make a setInterval function or something that runs it once and then stops. or maybe a do while.
}

export default Dashboard;
