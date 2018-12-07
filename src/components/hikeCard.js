import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import App from '../App'
import HikeList from './hikeList'
import { Navbar, Grid, Row, Col, Thumbnail } from 'react-bootstrap';


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
          <div >
            <img width="195" src={hike.img} />
            <p>{hike.hikename}</p>
            <p>{hike.comments}</p>
          </div>
        </Col>
        <Col sm={6} md={3} lg={4}>
          <div>
            <img width="195" src={hike.img} />
            <p>{hike.hikename}</p>
            <p>{hike.comments}</p>
          </div>
        </Col>
      </Row>
    </Grid>

    </div>
    )
  }
}

export default HikeCard
