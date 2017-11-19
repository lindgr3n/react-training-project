import React, { Component } from 'react';

import { NEWSFEED_DATA, TOPICS_DATA } from './data';

import './HackerHuntApp.css';

class HackerHuntApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: TOPICS_DATA,
      news: NEWSFEED_DATA,
      numberOfItemsToShow: 10
    };

    this.changeNumberOfItemsToShow = this.changeNumberOfItemsToShow.bind(this);
  }

  changeNumberOfItemsToShow() {
    this.setState({ numberOfItemsToShow: this.state.numberOfItemsToShow + 10 });
  }

  render() {
    return (
      <div id="hh">
        <HHHeader />
        <section>
          <HHSideBar topics={this.state.topics} />
          <HHContent news={this.state.news.data} count={this.state.numberOfItemsToShow} changenumberofitemstoshow={this.changeNumberOfItemsToShow} />
        </section>
      </div>
    );
  }
}

export default HackerHuntApp;

const HHHeader = props => {
  return (
    <header>
      <a href="/">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 17v7h5v-24h-5v12h-4v-12h-5v24h5v-7h4zm-27 11h32v4h-32v-4zm0-28h5v24h-5v-24zm9 0h5v24h-5v-24zm-4 12h4v5h-4v-5z" fill="#f60" />
        </svg>
      </a>
      <form id="search" className="">
        <fieldset>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <path d="M13.707 12.293l-2.822-2.822c.699-.981 1.115-2.177 1.115-3.471 0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.294 0 2.49-.416 3.471-1.115l2.822 2.822c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414zm-7.707-2.293c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
          </svg>
          <input type="text" className="" />
          <span className="x ">
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6l4-4-2-2-4 4-4-4-2 2 4 4-4 4 2 2 4-4 4 4 2-2-4-4z" fill="#D5D5D5" />
            </svg>
          </span>
          <div className="results ">
            <section>
              <div className="list" />
            </section>
          </div>
        </fieldset>
      </form>
    </header>
  );
};

const HHSideBar = props => {
  const { topics } = props;
  return (
    <aside className="">
      <div>
        <h3>Topics</h3>
        <Topics data={topics} />
      </div>
    </aside>
  );
};

const Topics = props => {
  const { data } = props;
  return <nav>{data.map(e => <TopicItem key={e.name} item={e} />)}</nav>;
};

const TopicItem = props => {
  const { item } = props;
  return (
    <div>
      <a className="" href="#">
        <span className={'thumb ' + item.icon} />
        <strong>{item.name}</strong>
      </a>
    </div>
  );
};

const HHContent = props => {
  const { news, count, changenumberofitemstoshow } = props;
  const countleft = news.length - count > 10 ? 10 : news.length - count;
  const shouldShowGetMore = countleft > 0;
  console.log(shouldShowGetMore, countleft);
  return (
    <div className="list">
      <header>
        <h3>Today</h3>
        <div className="dropdown off">
          <strong>popular</strong>
          <ul>
            <a href="/newest">Newest</a>
            <a href="/comments">Comments</a>
          </ul>
        </div>
      </header>
      <NewsFeedList data={news} count={count} />
      {shouldShowGetMore ? (
        <strong className="expand-link" onClick={changenumberofitemstoshow}>
          Show {countleft} more
        </strong>
      ) : (
        ''
      )}
      <footer>
        <a href="/page/1">Previous day</a>
      </footer>
    </div>
  );
};

const NewsFeedList = props => {
  const { data, count } = props;
  return data.map((newsItem, i) => (i < count ? <NewsItem key={i} item={newsItem} /> : ''));
};

const NewsItem = props => {
  const { item } = props;
  return (
    <article>
      <a href="#" target="_blank">
        <span>
          <em>▲</em>
          {item.votes}
        </span>
        <span>
          <em>
            <svg className="comment-12" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z" />
              </g>
            </svg>
          </em>
          {item.comments}
        </span>
      </a>
      <div>
        <h2>
          <a href={item.link} target="_blank">
            {item.title}
          </a>
          <sup>
            <span>This submission has been on Hacker News front page</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
              <path fill="#ff6600" d="M6 9l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573 1.763-3.573 1.763 3.573 3.943.573-2.853 2.781.674 3.927z" />
            </svg>
          </sup>
        </h2>
        <p className="desc">{item.desc}</p>
        <summary>
          <time>{item.modified}</time>
          <span>by </span>
          <a href="#">{item.author}</a>
          <NewsTagList tags={item.tags} />
        </summary>
      </div>
    </article>
  );
};

const NewsTagList = props => {
  const { tags } = props;
  return tags.split(',').map((tag, i) => <NewsTagItem key={i} tag={tag} />);
};

const NewsTagItem = props => {
  const { tag } = props;
  return (
    <a className="tag" href="#">
      {tag}
    </a>
  );
};
