import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import App from '../App'
import HikeList from './hikeList'
import { Navbar, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import "../assets/hikeCard.css"
import { deleteHike } from '../api'

class HikeCard extends Component {
  constructor(props){
    super(props)
  }
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
          <a href={"/hikes/" + hike[0].id}>  <h3>"{hike[0].hikename}"</h3>
            <p>{hike[0].trailhead}</p>
            <p>{hike[0].location}</p>
            <p>Hiker: {hike[1]}</p>
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
