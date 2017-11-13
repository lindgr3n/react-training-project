import React, { Component } from 'react';
import './App.css';

import WeatherChannelApp from './WeatherChannel/WeatherChannelApp';
import CalculatorApp from './Calculator/CalculatorApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
  }
  changeView(e) {
    console.log(e.target);
    this.setState({
      view: e.target.className
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-item one" onClick={e => this.changeView(e)}>
            WeatherChannel
          </div>
          <div className="App-item two" onClick={e => this.changeView(e)}>
            Calculator
          </div>
        </div>
        <br className="clearfix" />
        <div className="content">
          <div className={this.state.view !== 'App-item one' ? 'hidden' : ''}>
            <WeatherChannelApp />
          </div>
          <div className={this.state.view !== 'App-item two' ? 'hidden' : ''}>
            <CalculatorApp />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
