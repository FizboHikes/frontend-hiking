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
          <Thumbnail href={`hikes/${hike.id}`} src={hike.image}/>
            <h2>{hike.hikename}</h2>
            <p><strong>Comments: </strong>{hike.comments}</p>
            <p><strong>Tips: </strong>{hike.tips}</p>
        </Col>
      </Row>
    </Grid>

    </div>
    )
  }
}

export default HikeCard
