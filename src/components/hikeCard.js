import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import App from '../App'
import HikeList from './hikeList'
import { Navbar, Grid, Row, Col } from 'react-bootstrap';


class HikeCard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log("this is the props hikesList")
    console.log(this.props.hike)
    let {hike} = this.props
    return(
    <main className="cardComponents">
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <div >
            <img width="195" src={hike.img} />
            <p>{hike.hikename}</p>
            <p>{hike.comments}</p>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div >
            <img width="195" src={hike.img} />
            <p>{hike.hikename}</p>
            <p>{hike.comments}</p>
          </div>
        </Col>
      </Row>
    </Grid>

    </main>
    )
  }
}

export default HikeCard
