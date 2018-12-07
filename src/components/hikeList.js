import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import HikeCard from './hikeCard';


class HikeList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hikeList: [
        {
          hikename: 'Banana Split',
          comments: ['Ice Cream',' & ','Ice Cream',' & ','Ice Cream'],
          img: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          hikename: 'Hot Dogs',
          comments: ['bun', ' & ', 'hotdog'],
          img:"https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          hikename: 'Hot Dogs',
          comments: ['bun', ' & ', 'hotdog'],
          img:"https://images.unsplash.com/photo-1495605872451-ec35b8f0ddc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
        }
      ]
      }
  }

  render() {
    let {hikeList} = this.state
    console.log("this is the hikelist from HikeList")
    console.log(hikeList)
    let hikeListOrder = hikeList.map((hike, index) => {

      return(
        <HikeCard key={index} hike={hike}/>
      )
    })

    return(
      <div className="Container">
        {hikeListOrder}
      </div>
    )
  }
}


export default HikeList
