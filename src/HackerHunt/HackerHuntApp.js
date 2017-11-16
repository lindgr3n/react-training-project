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

          <NeewsFeedList data={NEWSFEED_DATA} />
        </div>

        <div className="footer">footer</div>
      </div>
    );
  }
}

export default HackerHuntApp;

const Topics = props => {
  const { data } = props;
  return <div>{data.map(e => <TopicItem key={e.name} item={e} />)}</div>;
};

const TopicItem = props => {
  const { item } = props;
  return <div>{item.name}</div>;
};

const NeewsFeedList = props => {
  const { data } = props;
  return (
    <div>
      {data.map((newsItem, i) => {
        return <NeewsItem key={i} item={newsItem} />;
      })}
    </div>
  );
};

const NeewsItem = props => {
  const { item } = props;
  return (
    <div className="news-container clearfix">
      <div className="news-sidebar float-left p20">
        <div className="news-ups">
          <span>u</span>
          {item.ups}
        </div>
        <div>
          <span className="news-comments">c</span>
          {item.comments}
        </div>
      </div>
      <div className="news-content float-left">
        <header>
          {item.name}
          <span>{item.stared}</span>
        </header>
        {item.descr}
        <div className="news-footer">
          {item.modified}
          by {item.modifiedby}
          {item.tags
            ? item.tags.map(tag => (
                <span className="news-tag" key={tag}>
                  {tag}
                </span>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};
