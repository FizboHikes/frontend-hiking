import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'
import { Jumbotron } from 'react-bootstrap'
import HikeCard from '../components/hikeCard'
import '../App.css';
import '../assets/dashboard.css';
import HikeList from '../components/hikeList'


class Dashboard extends Component {
  constructor(props){
    super(props)
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
                <HikeList/>
              </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
