import React from 'react';

const MovieListEntry = ({movie}) => (
    <div className="movie-list-entry">
      <div className="movie-title">{movie.title}</div>        
    </div>
)

export default MovieListEntry;