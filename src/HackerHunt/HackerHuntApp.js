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
            <h3 className="columnheader">TOPICS</h3>
          </header>
          <Topics data={TOPICS_DATA} />
        </aside>
        <div className="news">
          <header>
            <h3 className="columnheader">Today</h3> <h3 className="columnheader">Popular</h3>
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
          <span className="fa fa-sort-asc fa-2x" />
          <span className="float-left">{item.ups}</span>
        </div>
        <div className="news-comments">
          <span className="fa fa-sort-asc fa-2x" />
          <span className="float-left">{item.comments}</span>
        </div>
      </div>
      <div className="news-content">
        <header>
          <h3 className="float-left">{item.name}</h3>
          <span className={'float-left ' + item.stared ? 'fa fa-star' : ''} />
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
