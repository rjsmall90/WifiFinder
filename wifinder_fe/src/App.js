import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./component/home/home";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
