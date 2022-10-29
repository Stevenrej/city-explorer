import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default class WeatherDay extends Component {
  render() {

        return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Weather for {this.props.date}</Accordion.Header>
          <Accordion.Body>
            Low of {this.props.low}°C, high of {this.props.high}°C with {this.props.description}
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        )
  }
}
