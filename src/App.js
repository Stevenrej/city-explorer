import './App.css';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack';






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

    }
  }

  // *** CITY DATA DEMO HANDLERS ***

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
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

      console.log(url)
      

      
   
       response = await axios.get(url);
    
      console.log(response)
      let location = response.data[0];


      console.log(location);
      console.log(location.lat)
      this.setState({
        cityData: location,
        error: false,
        lat: location.lat,
        lon: location.lon,
      }, ()=> {
        this.getMapData();
      });

      console.log(this.state.cityData)
      
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })

    }
  }



  getMapData = async () => {

  console.log(this.state.lon);
  let urlmap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10`


  console.log(process.env.REACT_APP_LOCATIONIQ_API_KEY)

  let mapFind = await axios.get(urlmap);
  console.log(mapFind)
  const map = mapFind.config.url;

  this.setState({
    mapData: map
  })
    console.log(this.state.cityData.lat)
  console.log(urlmap)
}

  render() {

    return (
      <>
        <Stack gap={2} className="col-md-5 mx-auto">

          <Form onSubmit={this.getCityData}>
            <Form.Group >

              <div className="bg-light border">
                <Form.Label>Pick a City!</Form.Label>
              </div>
              <Form.Control type="text" placeholder="Enter Location" onInput={this.handleInput} />


              <Button variant="primary" id="mb" type='submit'>Explore!</Button>

            </Form.Group>
          </Form>


          {/* Ternary W ? T : F */}
          <div className="bg-light border">
            {

              this.state.error
                ?
                <p>{this.state.errorMessage}</p>
                :
                <p>
                  {this.state.cityData.display_name}
                  {this.state.cityData.lat}
                  {this.state.cityData.lon}
                </p>

            }
          </div>

          <img src={this.state.mapData} alt="map" />
        </Stack>
      </>
    );
  }
}

export default App;