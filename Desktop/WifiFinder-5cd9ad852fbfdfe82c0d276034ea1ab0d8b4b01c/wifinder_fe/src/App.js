import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./component/Home";

import EnterLocation from './component/enterLocation/enterLocation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Router>
		      <div>
			      <Route exact path="/" component={Home} />
		      </div>
	      </Router>
      <EnterLocation /> 
      </div>
    );
  }
}

export default App;