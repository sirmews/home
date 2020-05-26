import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from '../ThemeContext';

const Pill = (props) => {
  const darkmode = React.useContext(ThemeContext);
  return (<span className={`${darkmode ? 'bg-blue-900 bg-opacity-25 border-blue-700 text-white' : 'bg-blue-500 border-blue-600 text-red-100'} inline-block border-solid border-2 font-medium py-1 px-3 rounded-full mb-2 mr-2 text-sm`}>{props.toolchain}</span>)
}

export default Pill;
