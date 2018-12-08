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
      userHikes: []
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
                <HikeList userHikes={this.state.userHikes}/>
              </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
