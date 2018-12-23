import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import EnterLocation from './component/enterLocation/enterLocation'
import Location from './component/Location/locationHome'
import Home from "./plugins/Map/Home";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <EnterLocation />
      <Location /> 
	      <Router>
		      <div>
			      <Route exact path="/" component={Home} />
		      </div>
	      </Router>
      </div>
    );
  }
}

export default App;
