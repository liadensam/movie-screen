import React from 'react';
import './style.css';

import Actor from './../Actor';

const Movie = (props) => {
  return (
    <>
      <div className = "gridContainer">
        <div className = "poster">
          <img className = "posterImg" alt = "movie poster" src = {`./../assets/ ${props.poster}`}/>
        </div>

        <div className = "rating">
          <p>{props.rating}</p>
        </div>

        <div className = "movieDescription">
          <h4>{props.title}</h4>
          <ul className = "movieInfo">
            <li><b>Rok vydání:</b>{props.year}</li>
            <li><b>Žánr:</b>{props.genre}</li>
            <li><b>Režie:</b>{props.director}</li>
          </ul>

          <h5>V hlavních rolích:</h5>
          <ul className = "movieActors">
            <li>{props.cast.map(actor => <Actor key = {actor.id} name = {actor.name} as = {actor.as}/>)}</li>
          </ul>
        </div>

        
      </div>
    </>
  )
}

export default Movie;