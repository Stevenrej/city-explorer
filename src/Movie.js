import React, { Component } from 'react'
import MovieInd from './MovieInd';


export default class Movie extends Component {
  render() {


   let data_movie = this.props.movieData.map((mov) => {
      
      return <MovieInd
      title={mov.title}
      releasedOn={mov.realeasedOn}
      overview={mov.overview}
      imageUrl={mov.imageUrl}
      />


  });
    return (
      <div>
        {data_movie}
      </div>
    )
  }
}