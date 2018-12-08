import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import App from '../App'
import HikeList from './hikeList'
import { Navbar, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import "../assets/hikeCard.css"

class HikeCard extends Component {
  constructor(props){
    super(props)
  }
  render(){

    let {hike} = this.props
    return(
    <div>
    <Grid>
      <Row>
        <Col sm={6} md={3} lg={4}>
          <Thumbnail href="#" src={hike.image}/>
            <p className="paragraph"><a href={`hikes/${hike.id}`}>{hike.customHikeName}</a></p>
            <p className="paragraph"><a href={`hikes/${hike.id}`}>{hike.comments}</a></p>
        </Col>
        <Col sm={6} md={3} lg={4}>
          <Thumbnail href="#" src={hike.image}/>
            <p className="paragraph">{hike.customHikeName}</p>
            <p className="paragraph">{hike.comments}</p>
        </Col>
      </Row>
    </Grid>

    </div>
    )
  }
}

export default HikeCard
