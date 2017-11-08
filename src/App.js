import React, { Component } from 'react';
import './App.css';

import WeatherChannelApp from './WeatherChannel/WeatherChannelApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Veckans väder</h1>
        <WeatherChannelApp />
      </div>
    );
  }
}

export default App;
