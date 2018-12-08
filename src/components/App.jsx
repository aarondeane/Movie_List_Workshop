import React from 'react';
import { Formik } from 'formik';
// import exampleMovieData from '../data/exampleMovieData.js';
import movies from '../data/MovieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Input from './Input.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          movies: movies,
          search: '',
          input: ''
        };
    // this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = event.target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      event.preventDefault();
    }

    handleSearchSubmit(event) {
      
      var searchedMovie = movies.filter(movie => 
        movie.title === this.state.search
        );
        console.log(searchedMovie);
        if(searchedMovie.length !== 0) {
          this.setState({
            movies: searchedMovie,
            search: ''          
          });
        }else {
          alert('Sorry that movie can\'t be found');
        }
        event.preventDefault();
    }

    handleInputSubmit(event) {
      if(this.state.input !== '') {
        this.state.movies.push({title: this.state.input});
        this.setState({
          // movies: movies,
          input: ''
        });
      }else {
        alert("Please enter a movie you would like to add");
      }
      event.preventDefault();
    }
    
    render() {
      return (
        <div>
          <div className="header">
            <h1>Movie List</h1>
          </div>        
        <div className="navbar">
          <div className="inputbar">
            <Input input={this.state.input} handleInputChange={this.handleInputChange} handleInputSubmit={this.handleInputSubmit} />
          </div>
          <div className="searchbar">
            <Search search={this.state.search} handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit} />
          </div>
        </div>
        <div className="main-content">
          <MovieList movies={this.state.movies} />
        </div>
      </div>
      );
    }
}

export default App;