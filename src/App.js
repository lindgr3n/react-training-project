import React, { Component } from 'react';
import { string, object } from 'prop-types';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import WeatherChannelApp from './WeatherChannel/WeatherChannelApp';
import CalculatorApp from './Calculator/CalculatorApp';
import HackerHunt from './HackerHunt/HackerHuntApp';
import GithubIssues from './GithubIssues/GithubIssuesApp';
import Counter from './Increment/IncrementApp';
import ToDoApp from './ToDo/ToDoApp';
import TicTacToApp from './TicTacTo/TicTacToApp';

const APPS = [
  { component: WeatherChannelApp, link: 'Weather', description: 'Weather Channel' },
  { component: CalculatorApp, link: 'Calculator', description: 'Calculator' },
  { component: HackerHunt, link: 'HackerHunt', description: 'HackerHunt clone' },
  { component: GithubIssues, link: 'GithubIssues', description: 'Github issues clone' },
  { component: Counter, link: 'Increment', description: 'Increment counter' },
  { component: ToDoApp, link: 'ToDo', description: 'ToDo App' },
  { component: TicTacToApp, link: 'TicTacTo', description: 'TicTacTo' }
];

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
              {APPS.map((app, i) => <LinkItem key={i} link={app.link} description={app.description} />)}
            </ul>
          </div>

          <Route exact path="/" component={Home} />
          {APPS.map((app, i) => <RouteItem key={i} link={app.link} component={app.component} />)}
        </div>
      </Router>
    );
  }
}

export default App;

const Home = props => {
  return <div>Show some thumbnails and small info!</div>;
};

const LinkItem = props => {
  const { link, description } = props;
  const linkTo = `/${link}`;
  return (
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={linkTo}>
        {description}
      </NavLink>
    </li>
  );
};

LinkItem.propTypes = {
  link: string.isRequired,
  description: string.isRequired
};

const RouteItem = props => {
  const { component, link } = props;
  const linkTo = `/${link}`;
  return <Route path={linkTo} component={component} />;
};

RouteItem.propTypes = {
  component: object.isRequired,
  link: string.isRequired
};
