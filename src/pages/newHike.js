import React, { Component } from 'react';
import Home from '../pages/home'
import NavMenu from '../components/navmenu'
import { BrowserRouter as Redirect } from 'react-router-dom';
import '../assets/newHike.css'
import  AuthService  from '../services'
import { createHike } from '../api'

class NewHike extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      trailBaseUrl: "https://www.hikingproject.com/data/get-trails?",
      trailApiKey: "7039084-3fb0c833662f3c90057cc37e292d1118",
      hikeList: undefined,
      googleApiKey: "AIzaSyB_RpOSFqOIb51R22UAqKygmX7_bRwJKaI",
      city: "",
      lat: "",
      lon: "",
      geoBaseURl: "https://maps.googleapis.com/maps/api/geocode/json?address=",
      newHikeSuccess: false,
      hikeForm: {
          trailhead: "",
          hikename: "",
          comments:"",
          tips:"",
          image:"",
          summary: "",
          stars: "",
          high: "",
          ascent: "",
          difficulty: "",
          stars: "",
          location: "",
          user_id: undefined
          // changed it to undefined because it's one less function call being needed.
      }
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
      // console.log(json)
      this.setState({hikeList: trails})
    })
  }

  getCoordinates=(city)=> {

    let url = encodeURI(`${this.state.geoBaseURl}${this.state.city}&key=${this.state.googleApiKey}`)
    fetch(url)
    .then( stringResponse => {
      return stringResponse.json()
    }).then( json => {
      // console.log(json)
      let results = json.results[0].geometry.location
      let {lat, lng} = results
      this.setState({lat: lat, lon: lng})
    }).then( () =>
      this.getTrailHeads())
      .catch(() =>
        alert("Please enter a valid location"))
  }


  render() {
    let {hikeForm}= this.state
    let style = "trailList"
    return (
      <div className = "newHikePage">
        <div className="searchHike">
          <h2>Trailblaze</h2>
          <input type="text" onChange={this.handleChange} value={this.state.city} required></input>
          <button type="submit" onClick={this.submitCity}>Submit City</button>
          <div className = {(this.state.hikeList) && style} >
            {(this.state.hikeList) && this.state.hikeList.map( (el, index) => {
                return(
                <div className="trailHead" key={index} onClick={this.handleSelect.bind(this, el)}>
                  <h5>Trail {index+1}</h5>
                  <ul>
                    <li>Trailhead: {el.name}</li>
                    <li>Location: {el.location}</li>
                  </ul>
                  <hr />
                </div>
                )})}
            </div>
        </div>
            {/* Adding form to create tips and descriptions */}
            {(hikeForm.trailhead) && <main className="createHikeForm">
              <form onSubmit={this.handleSubmit}>
            
              <div className= "hikeInputForm">
              <h2>{hikeForm.trailhead}</h2>
              <input className= "hikeInput" required
                type="hikename"
                name="hikename"
                placeholder= "Enter Your Hike Name"
                value={hikeForm.hikename}
                onChange={this.onChange}
              />
                <input className= "hikeInput" required
                  type="comments"
                  name="comments"
                  placeholder= "Hike Comments"
                  value={hikeForm.comments}
                  onChange={this.onChange}
                />

                <input className= "hikeInput" required
                  type="tips"
                  name="tips"
                  placeholder= "Hike Tips"
                  value={hikeForm.tips}
                  onChange={this.onChange}
                />
                <button>Save</button>
                </div>
              </form>

            </main>}
      </div>
    );
    }


  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('this is our hikeForm', this.state.hikeForm)
    // this.props.submitHike(this.state.hikeForm)

    createHike(this.state.hikeForm)
    .then( successHike => {
      console.log("SUCCESS! NEW HIKE: ", successHike);
      this.setState({
        newHikeSuccess: true
      })
    })
      .then( () => {
        this.props.history.push('/dashboard')
      })
    // .then( () => {
    //   console.log(this.state)
    // })
  }


  handleChange=(e)=>{
    this.setState({city: e.target.value})
  }
  submitCity = (e) => {
    e.preventDefault();
    this.getCoordinates(this.state.city)


  }

// Added for form to create tips and description.
  onChange = (e) => {
    let { hikeForm } = this.state
    hikeForm[e.target.name] = e.target.value
    this.setState({ hikeForm })
  }

  handleSelect = (el) => {
    let { hikeForm } = this.state
    this.setState({ hikeForm: {
      trailhead: el.name,
      image: el.imgMedium,
      summary: el.summary,
      stars: el.stars,
      high: el.high,
      ascent: el.ascent,
      difficulty: el.difficulty,
      stars: el.stars,
      location: el.location,
      user_id: this.auth.getUserId()}
    })
  }


}

export default NewHike;


// "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=7039084-3fb0c833662f3c90057cc37e292d1118",
