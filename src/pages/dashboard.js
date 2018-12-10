import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'
import { Jumbotron } from 'react-bootstrap'
import HikeCard from '../components/hikeCard'
import '../App.css';
import '../assets/dashboard.css';
import HikeList from '../components/hikeList'
import AuthService from '../services'
import { getUserHikes } from '../api'


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService();
    this.state = {
      userHikes: [],
      successDelete: false
    }
  }

  componentDidMount(){
    getUserHikes(this.auth.getUserId())
    .then(APIhikes => {
      this.setState({
        userHikes: APIhikes
      })
    })
  }

  render() {

    return (
      <div>
        <Jumbotron>
        </Jumbotron>
          <div>
          </div>
            <div className="HikeList">
              <div className="cardComponent">
              {(this.state.successDelete) && <strong>Hike Deleted</strong> }
                <HikeList successDelete={this.successDelete} userHikes={this.state.userHikes}/>
              </div>
          </div>
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
