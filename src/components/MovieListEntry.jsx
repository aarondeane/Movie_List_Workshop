import React from 'react';

const MovieListEntry = (props) => (
    <div className="movie-list-entry">
      <div className="movie-title">{props.movie.title}</div>
      <button onClick={props.handleToggle} id={props.movie.title} name="watched-toggle" value="Watched">
        {props.movie.isWatched ? 'Watched' : 'Unwatched'}
      </button>      
    </div>
)

export default MovieListEntry;