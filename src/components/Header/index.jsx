import React from 'react';
import './style.css';

import camera from './img/camera.svg';

const Header = () => {
  return (
      <div className = "headerWrapper">
        <h1>
          <img className ="logo" src={camera} alt="Logo" />
          Currently screening
        </h1>
      </div>
  )
}

export default Header;