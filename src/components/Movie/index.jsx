import React from 'react';
import './style.css';

import Actor from '../Actor';

const Movie = (props) => {
  return (
    <>
      <div className = "movieCard">
        <div className = "poster">
          <img className = "posterImg" alt = "movie poster" src = {`./assets/${props.poster}`}/>
        </div>
        
        <div className = "rating">
          <p><b>{props.rating}</b> / 10</p>
        </div>

        <div className = "movieDescription">
          <h3>{props.title}</h3>
          <ul className = "movieInfo">
            <li><b>Rok vydání: </b><span>{props.year}</span></li>
            <li><b>Žánr: </b><span>{props.genre}</span></li>
            <li><b>Režie: </b><span>{props.director}</span></li>
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