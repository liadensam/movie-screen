import React from 'react';
import './style.css';

const Actor = ({name, as}) => {
  return (
      <ul className = "actors">
        <li>{name}</li>
        <li>as {as}</li>
      </ul>
  )
}

export default Actor;