import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class Weather extends Component {
  render() {
    console.log(this.props)

   let data_weather = this.props.weatherData.map((day) => (
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{day.date}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          Low of {day.low}, high of {day.high} with {day.description}
        </Card.Text>

      </Card.Body>
    </Card>

   ));
    return (
      <div>
        {data_weather}
      </div>
    )
  }
}
