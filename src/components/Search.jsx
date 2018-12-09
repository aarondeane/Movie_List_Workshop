import React from 'react';
import { Formik } from 'formik';

const Search = (props) => (
  <div>
    <input type="button" name="watched-list" value="Watched" />
    <input type="button" name="all-list" value="All" />
    <form onSubmit={props.handleSearchSubmit}>
      <input type="text" name="search" placeholder="Enter Search Here" value={props.search} onChange={props.handleInputChange} />
      <input type="submit" value="Search" />
    </form>
  </div>  
)

export default Search;