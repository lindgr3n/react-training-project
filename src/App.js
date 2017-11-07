import React, { Component } from 'react';
import './App.css';

import WeatherChannel from './WeatherChannel/WeatherChannel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Veckans väder</h1>
        <WeatherChannel />
      </div>
    );
  }
}

export default App;
