import React, { Component } from 'react';
import { getHike } from '../api'
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
        <div>
          <h3>TrailHead: {hike.trailhead}</h3>
          <p>My Name: {hike.hikename}</p>
          <p>Stars: {hike.stars}</p>
          <img src={(hike.image) ? hike.image : "https://i.pinimg.com/originals/77/85/91/7785910e63b1662e8abe313c8ef9d160.jpg"} />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}
