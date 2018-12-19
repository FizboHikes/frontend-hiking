import React from 'react';
import HikeCard from './hikeCard';
import '../assets/dashboard.css'


const FriendsHikeList = (props) => {

    let hikeList = props.friendsHikes.map((hike, index) => {
      return(
        <HikeCard friend={true} key={index} arrIndex={index} hike={hike}/>
      )
    })

    return(
      <div className="hikeList">
        {hikeList}
      </div>
    )
}


export default FriendsHikeList
