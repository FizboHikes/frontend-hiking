import React, { Component } from 'react';
import "../assets/hikeCard.css"
import { deleteHike } from '../api'
import Ratings from 'react-ratings-declarative'


class HikeCard extends Component {

  render(){

    let {hike} = this.props
    let style = {backgroundImage: `url(${(hike.image) ? hike.image : "https://i.pinimg.com/originals/77/85/91/7785910e63b1662e8abe313c8ef9d160.jpg"})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}
    if (this.props.friend) {
      return(
        <div className="hikeCard" style={style}>
          <div className="overlay">
            <div className="hikeCardText">
          <a href={"/hikes/" + hike.id}>  <h3>"{hike.hikename}"</h3>
            {(hike.stars) &&<Ratings
              rating={parseFloat(hike.stars)}
              widgetDimensions="15px"
              widgetSpacings="3px"
            >
            <Ratings.Widget widgetRatedColor="black" />
            <Ratings.Widget widgetRatedColor="black" />
            <Ratings.Widget widgetRatedColor="black" />
            <Ratings.Widget widgetRatedColor="black" />
            <Ratings.Widget widgetRatedColor="black" />
            </Ratings>}
            <p>{hike.trailhead}</p>
            <p>{hike.location}</p>
            <p>Hiker: {hike.user.email}</p>
          </a>
            </div>
          </div>
        </div>
      )
    } else {
    return(
      <div className="hikeCard" style={style}>
        <div className="overlay">
          <div className="hikeCardText">
        <a href={"/hikes/" + hike.id}>  <h3>"{hike.hikename}"</h3>
        {(hike.stars) && <Ratings
          rating={parseFloat(hike.stars)}
          widgetDimensions="15px"
          widgetSpacings="3px"
        >
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="black" />
        </Ratings>}
          <p>{hike.trailhead}</p>
          <p>{hike.location}</p>
        </a>
          <span onClick= {this.handleDelete}>🗑</span>
          </div>
        </div>
      </div>
    )}
  }
  handleDelete = (e) => {
    e.preventDefault()
    deleteHike(this.props.hike.id)
    .then(()=>{
      this.props.successDelete(this.props.arrIndex)
    })
  }
}

export default HikeCard
