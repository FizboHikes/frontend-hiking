import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import App from '../App'
import HikeList from './hikeList'
import { Navbar, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import "../assets/hikeCard.css"
import { deleteHike } from '../api'

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
        <Col sm={6} md={3} lg={3}>
          <Thumbnail className="hikeCard" href={`hikes/${hike.id}`} src={(hike.image) ? hike.image : "https://i.pinimg.com/originals/77/85/91/7785910e63b1662e8abe313c8ef9d160.jpg"}>
            <h2>{hike.hikename}</h2>
            <p><strong>Comments: </strong>{hike.comments}</p>
            <p><strong>Tips: </strong>{hike.tips}</p>
            <button onClick= {this.handleDelete}>Delete this Hike</button>
            </Thumbnail>
        </Col>
      </Row>
    </Grid>
    </div>
    )
  }
  handleDelete = (e) => {
    e.preventDefault()
    deleteHike(this.props.hike.id)
    .then(()=>{
      this.props.successDelete()
    })
  }
}

export default HikeCard
