import React, { Component } from 'react';
import { getHike } from '../api'
import '../assets/showHike.css'
import {Thumbnail} from 'react-bootstrap'
import Ratings from 'react-ratings-declarative'

export default class ShowHike extends Component {
  constructor(props){
    super(props)
    this.state = {
      hike: undefined,
      isMyHike: false
    }
  }
  componentDidMount() {
   const id = this.props.match.params.id
   console.log("this is the params id " +id);
   getHike(id)
   .then((hike) => {
     console.log(hike);
     this.setState({hike: hike, isMyHike: (this.props.userId == hike.user_id)})
   })
 }

  render() {
    let { hike } = this.state
    console.log(this.state.hike)
    if (this.state.hike){
      return(
        <div className="showHikeContainer">
          <div className="showHikeImg">
            <img className="img-thumbnail" src={(hike.image) ? hike.image : "https://i.pinimg.com/originals/77/85/91/7785910e63b1662e8abe313c8ef9d160.jpg"} />
          </div>
          <div className="showHikeText">
            <h2> "{hike.hikename}"</h2>
            <h4><strong>TrailHead:</strong> {hike.trailhead}</h4>
            <p><strong>Location:</strong> {hike.location}</p>
              {hike.stars &&
              <Ratings
                rating={parseFloat(hike.stars)}
                widgetDimensions="20px"
                widgetSpacings="10px"
              >
                <Ratings.Widget widgetRatedColor="orange" />
                <Ratings.Widget widgetRatedColor="orange" />
                <Ratings.Widget widgetRatedColor="orange" />
                <Ratings.Widget widgetRatedColor="orange" />
                <Ratings.Widget widgetRatedColor="orange" />
              </Ratings> }
            <p><strong>Summary:</strong> {hike.summary}</p>
            <p><strong>Comments:</strong> {hike.comments}</p>
            <p><strong>Tips:</strong> {hike.tips}</p>
            <p><strong>Difficulty:</strong> {hike.difficulty}</p>
            <p><strong>Ascent:</strong> {hike.ascent}</p>
            <p><strong>Max Elevation:</strong> {hike.high}</p>
            {(!this.state.isMyHike) && <p> <strong>Hike By:</strong> {this.state.hike.user.email}</p>}
            <button className="btn btn-primary"><a href="/dashboard"> Back to Dashboard </a> </button>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}
