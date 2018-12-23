import React, { Component } from 'react';
import EnterLocation from './component/enterLocation/enterLocation'
import Location from './component/Location/location'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <EnterLocation />
      <Location /> 
      </div>
    );
  }
}

export default App;
