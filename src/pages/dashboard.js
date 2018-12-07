import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'
import Geocode from "react-geocode";


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=7039084-3fb0c833662f3c90057cc37e292d1118",
      hikeList: undefined,
      googleApiKey: "AIzaSyB_RpOSFqOIb51R22UAqKygmX7_bRwJKaI"
    }
  }

  componentDidMount(){
    fetch(this.state.url)
    .then((stringResponse) => {
      return stringResponse.json()
    })
    .then((json) => {
      let {trails} = json
      this.setState({hikeList: trails})
    })
  }



  render() {
    if(this.state.hikeList){
    return (
      <div>
        <input></input>
        {this.state.hikeList[4].name}
        <br/>
        {this.state.hikeList[4].location}

        <br/>
        {this.state.hikeList[4].conditionDate}
        <br/>
        {this.state.hikeList[4].conditionDetails}
      </div>
    );
  } else {
    return(
      <p>loading</p>
    )
  }
  }
}

export default Dashboard;
