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
      cityData: [],
      error: false,
      errorMessage: ''
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

    try {
      // TODO: get data back from LocationIQ
      // Use axios to make my API call

      // define my URL to send to axios:
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityData = await axios.get(url);

      console.log(cityData.data[0]);
      this.setState({
        cityData: cityData.data[0],
        error: false
      });

      // FOR YOUR LAB YOU WILL NEED TO GET A MAP IMAGE SRC. Example:
      // `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&zoom=10`

    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
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
        </Stack>
      </>
    );
  }
}

export default App;