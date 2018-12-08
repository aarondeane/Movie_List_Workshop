import React from 'react';
import { Formik } from 'formik';

const Search = (props) => (
  <form onSubmit={props.handleSearchSubmit}>
      <input type="text" name="search" placeholder="Enter Search Here" value={props.search} onChange={props.handleInputChange} />
      <input type="submit" value="Search" />
  </form>
)

export default Search;