import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// At the heart of the react application is the root component, App 
class App extends Component {
  render() { // o/p of this render method is a react element which is a plane simple javascript object which maps with the DOM element
    return (
     React.createElement(
       "h1",
       {className:'col-md-12'},
       "The code is already in react, Babel has no work to do"
     )
    );
  }
}

export default App;
