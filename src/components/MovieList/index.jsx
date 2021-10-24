import React from 'react';
import './style.css';

import Movie from './../Movie';

const MovieList = (props) => {
  return (
    <div className = "movieListWrapper">
      {props.movies.map(
        movie => {
          return <Movie key={movie.id} poster={movie.poster} rating={movie.rating} title={movie.title} year={movie.year} genre={movie.genre} director={movie.director} actors={movie.cast} />;
        })}
    </div>
  )
}

export default MovieList;