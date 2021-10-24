import React from 'react';
import './style.css';

import Actor from '../Actor';

const Movie = (props) => {
  return (
    <>
      <div className = "movieCard">
        <div className = "poster">
          <img className = "posterImg" alt = "movie poster" src = {props.poster}/>
        </div>
        
        <div className = "rating">
          <p>{props.rating}/10</p>
        </div>

        <div className = "movieDescription">
          <h4>{props.title}</h4>
          <ul className = "movieInfo">
            <li><b>Rok vydání:</b>{props.year}</li>
            <li><b>Žánr:</b>{props.genre}</li>
            <li><b>Režie:</b>{props.director}</li>
          </ul>

          <h5>V hlavních rolích:</h5>
          <div className = "movieActors">
            {props.cast.map(actor => 
            <Actor 
            key = {actor.id} 
            name = {actor.name} 
            as = {actor.as}
            />
            )}
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Movie;