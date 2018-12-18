import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import HikeCard from './hikeCard';
import '../assets/dashboard.css'
import { Carousel } from 'react-bootstrap'

const HikeList = (props) => {
    let hikeList = props.userHikes.map((hike, index) => {
      return(
        <HikeCard successDelete={props.successDelete} key={index} arrIndex={index} hike={hike}/>
      )
    })

    return(

      <div className="hikeList">
        {(props.greeting) ? <h2 className="greeting">{props.greeting}</h2> : ''}
        {hikeList}
      </div>
    )
}


export default HikeList
