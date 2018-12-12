import React, { Component } from 'react';
import { getHike } from '../api'
import '../assets/showHike.css'
import {Thumbnail} from 'react-bootstrap'
export default class ShowHike extends Component {
  constructor(props){
    super(props)
    this.state = {
      hike: undefined

    }
  }
  componentDidMount() {
   const id = this.props.match.params.id
   console.log("this is the params id " +id);
   getHike(id)
   .then((hike) => {
     this.setState({hike})
   })
 }

  render() {
    let { hike } = this.state
    console.log(hike)
    if (this.state.hike){
      return(
        <div className="showHikeContainer">
          <div className="showHikeImg">
            <img className="img-thumbnail" src={(hike.image) ? hike.image : "https://i.pinimg.com/originals/77/85/91/7785910e63b1662e8abe313c8ef9d160.jpg"} />
          </div>
          <div className="showHikeText">
            <h3> "{hike.hikename}"</h3>
            <h4>TrailHead: {hike.trailhead}</h4>
            <p>Location: {hike.location}</p>
            <p>Stars: {hike.stars}</p>
            <p>Comments: {hike.comments}</p>
            <p>Tips: {hike.tips}</p>
            <p>Summary: {hike.summary}</p>
            <p>Difficulty: {hike.difficulty}</p>
            <p>Ascent: {hike.ascent}</p>
            <p>Max Elevation: {hike.high}</p>
            <p>Hike By: "Inser User Email Here"</p>
            <button className="btn btn-primary"><a href="/dashboard"> Back to Dashboard </a> </button>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}
