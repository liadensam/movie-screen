import React from 'react';
import './style.css';

import Movie from './../Movie';

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
        {movies.map ( (film) => <Movie key = {film.id} title = {film.title} poster = {film.poster} year = {film.year} rating = {film.rating} director = {film.director} genre = {film.genre} cast = {film.cast} /> )}
      </div>
    </>
  )
}

export default MovieList;