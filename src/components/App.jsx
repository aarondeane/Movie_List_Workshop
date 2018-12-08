import React from 'react';
import exampleMovieData from '../data/exampleMovieData.js';
import MovieList from './MovieList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movies: exampleMovieData}
    }
    
    render() {
      return (
        <div>
          <div className="header">
            <h1>Movie List</h1>
          </div>        
        <div className="navbar">

        </div>
        <div className="main-content">
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
      );
    }
}

export default App;