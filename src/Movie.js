import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class Movie extends Component {
  render() {
    console.log(this.props)

   let data_movie = this.props.movieData.map((mov, idx) => (
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{mov.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{mov.realeasedOn}</Card.Subtitle>
        <Card.Text>
          {mov.overview}
        </Card.Text>      

      </Card.Body>
    </Card>

   ));
    return (
      <div>
        {data_movie}
      </div>
    )
  }
}