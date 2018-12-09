import MovieListEntry from "./MovieListEntry.jsx";
import React from 'react';

const MovieList = (props) => {
  var toggle = false;
  
  return (
  <div className="movie-list">
    {props.movies.map((movie) => (
      <MovieListEntry key={movie.title} movie={movie} handleToggle={props.handleToggle} />
      )
    )}
  </div>
  )
}

export default MovieList;