import React, { Component } from 'react'
import WeatherDay from './WeatherDay';


export default class Weather extends Component {
  render() {


    let data_weather = this.props.weatherData.map((day) => {

    return <WeatherDay
      date={day.date}
      low={day.low}
      high={day.high}
      description={day.description}
      />

    });
        return (
        <div>
          {data_weather}
        </div>
        )
  }
}
