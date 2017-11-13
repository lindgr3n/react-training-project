import React, { Component } from 'react';
import './App.css';

import WeatherChannelApp from './WeatherChannel/WeatherChannelApp';
import CalculatorApp from './Calculator/CalculatorApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherChannelApp />
        <hr />
        <CalculatorApp />
      </div>
    );
  }
}

export default App;
