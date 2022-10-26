import './App.css';
import React from 'react';
import axios from 'axios';
import Weather from './Weather.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: '',
      mapData: '',
      lat: '',
      lon: '',
      date: '',
      low: '',
      high: '',
      description: '',
      weatherApp: [],

    }
  }

  // *** CITY DATA DEMO HANDLERS ***

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value.toLowerCase(),
    })

  }



  // async/await - handles our asynchronous code
  // try/catch - handles our promise - resolve a successful promise, or handles our errors with a rejected promise

  getCityData = async (e) => {
    e.preventDefault();
    console.log(this.state.city);
    let response;
    try {
      // TODO: get data back from LocationIQ
      // Use axios to make my API call

      // define my URL to send to axios:
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`






      response = await axios.get(url);


      let location = response.data[0];




      this.setState({
        cityData: location,
        error: false,
        lat: location.lat,
        lon: location.lon,
      }, () => {
        this.getMapData();
        this.getWeatherData();
      });



    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })

    }
  }


  getWeatherData = async () => {
    let urlWeather = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}&lat=${this.state.lat}&lon=${this.state.lon}`;
    console.log(urlWeather);

    let weatherData = await axios.get(urlWeather);
    console.log(weatherData);
    this.setState({
      weatherApp: weatherData.data
    })

  }



  getMapData = async () => {


    let urlmap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`


    let mapFind = await axios.get(urlmap);
    console.log(mapFind)
    const map = mapFind.config.url;

    this.setState({
      mapData: map
    })
  }

  render() {

    return (
      <>
        <body id='main'>
          <main>
          <Stack id="main" gap={2} className="col-md-5 mx-auto">
            <h1 id="head">City Explorer</h1>

            <Form onSubmit={this.getCityData}>
              <Form.Group >

                <div id='h2'className="bg-light border">
                  <Form.Label id='formL' >Pick a city you would like to know more about! Scroll down after you click submit.</Form.Label>
                </div>
                <Form.Control type="text" placeholder="Enter Location" onInput={this.handleInput} />


                <Button variant="primary" id="mb" type='submit'>Explore!</Button>

              </Form.Group>
            </Form>




            {

              this.state.error
                ?
                <p>{this.state.errorMessage}</p>
                :
                <p id="text">

                  {this.state.cityData.display_name}
                  <div></div>
                  {this.state.cityData.lat}
                  <div></div>
                  {this.state.cityData.lon}

                </p>

            }
              <Weather
             weatherData={this.state.weatherApp}

             />
            


            <Image id="img"src={this.state.mapData}
              fluid />
          </Stack>
          </main>
        </body>
      </>
    );
  }
}

export default App;