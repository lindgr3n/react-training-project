import React, { Component } from 'react';
import './App.css';

import WeatherChannelApp from './WeatherChannel/WeatherChannelApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherChannelApp />
      </div>
    );
  }
}

export default App;
