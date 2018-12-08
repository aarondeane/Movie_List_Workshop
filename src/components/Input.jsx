import React from 'react';
import { Formik } from 'formik';

const Input = (props) => (
  <form onSubmit={props.handleInputSubmit}>
      <input type="text" name="input" placeholder="Add a Movie!" value={props.input} onChange={props.handleInputChange} />
      <input type="submit" value="Add" />
  </form>
)

export default Input;