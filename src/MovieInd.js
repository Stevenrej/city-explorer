import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class Movie extends Component {
  render() {



      

 
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${this.props.imageUrl}`} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.props.realeasedOn}</Card.Subtitle>
        <Card.Text>
          {this.props.overview}
        </Card.Text>      

      </Card.Body>
    </Card>

    )
  }
}