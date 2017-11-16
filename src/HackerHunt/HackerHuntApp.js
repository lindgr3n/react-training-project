import React, { Component } from 'react';

import { NEWSFEED_DATA, TOPICS_DATA } from './data';

import './HackerHuntApp.css';

class HackerHuntApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          Header <input />
        </header>

        <aside className="sidebar">
          <header>
            <h3>TOPICS</h3>
          </header>
          <Topics data={TOPICS_DATA} />
        </aside>
        <div className="news">
          <header>
            <h3>Today</h3> <h3>Popular</h3>
          </header>

          <h1>Main article area</h1>
        </div>

        <div className="footer">footer</div>
      </div>
    );
  }
}

export default HackerHuntApp;

const Topics = props => {
  const { data } = props;
  return <div>{data.map(e => <TopicItem key={e} item={e} />)}</div>;
};

const TopicItem = props => {
  const { item } = props;
  return <div>{item.name}</div>;
};
