import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import WeatherChannelApp from './WeatherChannel/WeatherChannelApp';
import CalculatorApp from './Calculator/CalculatorApp';
import HackerHunt from './HackerHunt/HackerHuntApp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Weather">
                  Weather Channel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Calculator">
                  Calculator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/HackerHunt">
                  HackerHunt clone
                </NavLink>
              </li>
            </ul>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/Weather" component={WeatherChannelApp} />
          <Route exact path="/Calculator" component={CalculatorApp} />
          <Route exact path="/HackerHunt" component={HackerHunt} />
        </div>
      </Router>
    );
  }
}

export default App;

const Home = props => {
  return <div>Show some thumbnails and small info!</div>;
};
