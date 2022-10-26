import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class Weather extends Component {
  render() {


   let data_weather = this.props.weatherData.map((day, idx) => (
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{day.date}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          Low of {day.low}°F, high of {day.high}°F with {day.description}
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
