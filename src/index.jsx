import React from 'react';
import { render } from 'react-dom';
import './style.css';

import movies from './movies';

import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';



const App = () => (
  <>
    <Header/>
    <div className = "main">
      <MovieList movies = {movies}/>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
