import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Pill = (props) => {
  return (<span className={`bg-blue-900 bg-opacity-25 border-blue-700 inline-block text-white border-solid border-2 font-medium py-1 px-3 rounded-full mb-2 mr-2 text-sm`}>{props.toolchain}</span>)
}

export default Pill;
