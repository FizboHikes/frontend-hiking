import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import HikeCard from './hikeCard';


const HikeList = (props) => {

    let hikeList = props.userHikes.map((hike, index) => {
      return(
        <HikeCard key={index} hike={hike}/>
      )
    })

    return(
      <div className="Container">
        {hikeList}
      </div>
    )
}


export default HikeList
