import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'


class NewHike extends Component {
  constructor(props){
    super(props)

    this.state = {
      trailBaseUrl: "https://www.hikingproject.com/data/get-trails?",
      trailApiKey: "7039084-3fb0c833662f3c90057cc37e292d1118",
      hikeList: undefined,
      googleApiKey: "AIzaSyB_RpOSFqOIb51R22UAqKygmX7_bRwJKaI",
      city: "",
      lat: "",
      lon: "",
      geoBaseURl: "https://maps.googleapis.com/maps/api/geocode/json?address=",


    }
  }

  getTrailHeads = () => {
    let url = `${this.state.trailBaseUrl}lat=${this.state.lat}&lon=${this.state.lon}&maxDistance=75&sort=Distance&maxResults=20&key=${this.state.trailApiKey}`
    fetch(url)
    .then((stringResponse) => {
      return stringResponse.json()
    })
    .then((json) => {
      let {trails} = json
      console.log(json)
      this.setState({hikeList: trails})
    })
  }

  getCoordinates=(city)=> {

    let url = encodeURI(`${this.state.geoBaseURl}${this.state.city}&key=${this.state.googleApiKey}`)
    console.log(url)
    fetch(url)
    .then( stringResponse => {
      return stringResponse.json()
    }).then( json => {
      console.log(json)
      let results = json.results[0].geometry.location
      let {lat, lng} = results
      this.setState({lat: lat, lon: lng})
    }).then( () =>
      this.getTrailHeads())
  }


  render() {

    if(this.state.hikeList){
    return (
      <div>
          <input type="text" onChange={this.handleChange} value={this.state.city}></input>
          <button type="submit" onClick={this.submitCity}>Submit City</button>
          {this.state.hikeList.map( (el, index) => {
            return(
            <div>
              <h5>Result #{index+1}</h5>
              <ul key={index}>
                <li>Trailhead: {el.name}</li>
                <li>Location: {el.location}</li>
              </ul>
            </div>
            )})}

      </div>
    );
    } else {
      return(
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.city}></input>
          <button type="submit" onClick={this.submitCity}>Submit City</button>
          <p>Trailheads waiting for location</p>
        </div>
      )
    }
  }

  handleChange=(e)=>{
    console.log(e)
    this.setState({city: e.target.value})
  }
  submitCity = (e) => {
    e.preventDefault();
    this.getCoordinates(this.state.city)

  }
}

export default NewHike;


// "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=7039084-3fb0c833662f3c90057cc37e292d1118",
