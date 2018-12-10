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
    <div className="theContainer">
    <Grid>
      <Row>
        <Col sm={4} md={4} lg={4}>
          <Thumbnail className="hikeCard" href={`hikes/${hike.id}`} src={hike.image}>
            <h2>{hike.hikename}</h2>
            <p><strong>Comments: </strong>{hike.comments}</p>
            <p><strong>Tips: </strong>{hike.tips}</p>
            </Thumbnail>
        </Col>
      </Row>
    </Grid>
    </div>
    )
  }
}

export default HikeCard
