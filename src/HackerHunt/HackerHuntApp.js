import React, { Component } from 'react';

import { NEWSFEED_DATA, TOPICS_DATA } from './data';

import './HackerHuntApp.css';

class HackerHuntApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">Header</div>
        <div className="sidebar">
          <Topics data={TOPICS_DATA} />
        </div>
        <div className="content">
          <h1>Main article area</h1>
        </div>
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
