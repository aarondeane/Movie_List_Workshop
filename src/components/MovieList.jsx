import MovieListEntry from "./MovieListEntry.jsx";
import React from 'react';

const MovieList = ({movies}) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieListEntry key={movie.title} movie={movie} />
      )
    )}
  </div>
)

export default MovieList;