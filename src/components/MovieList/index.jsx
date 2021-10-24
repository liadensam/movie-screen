import React from 'react';
import './style.css';

import Movie from '../Movie';

// const MovieList = (props) => {
//   return (
//     <>
//       <div className = "movieListWrapper">
//         {props.movies.map( (movie, id) => <Movie key={id} poster={movie.poster} rating={movie.rating} title={movie.title} year={movie.year} genre={movie.genre} director={movie.director} actors={movie.cast} />
//         )}
//       </div>
//     </>
//   )
// }


const MovieList = ({movies}) => {
  return (
    <>
      <div className = "movieListWrapper">
        {movies.map ( movie => 
        <Movie 
        key = {movie.id} 
        title = {movie.title} 
        poster = {movie.poster} 
        year = {movie.year} 
        rating = {movie.rating} 
        director = {movie.director} 
        genre = {movie.genre} 
        cast = {movie.cast} 
        /> 
        )}
      </div>
    </>
  )
}

export default MovieList;