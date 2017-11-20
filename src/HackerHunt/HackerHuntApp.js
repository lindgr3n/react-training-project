import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { /* NEWSFEED_DATA, */ TOPICS_DATA } from './data';

import './HackerHuntApp.css';

const URL = 'https://hackerhunt.co/api/daily/';

class HackerHuntApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: TOPICS_DATA,
      news: [],
      numberOfItemsToShow: 10,
      newsfeedfilter: 'POPULAR',
      isLoading: false,
      page: 0
    };

    this.changeNumberOfItemsToShow = this.changeNumberOfItemsToShow.bind(this);
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.onChangeDayHandler = this.onChangeDayHandler.bind(this);
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount() {
    this.requestData();
  }

  changeNumberOfItemsToShow() {
    this.setState({ numberOfItemsToShow: this.state.numberOfItemsToShow + 10 });
  }

  filterChangeHandler(event) {
    const target = event.target;
    const eventAction = target.selectedOptions[0].attributes['tag'].value;
    this.setState({ newsfeedfilter: eventAction });
  }

  onChangeDayHandler() {
    this.setState({ page: this.state.page + 1 }, this.requestData);
  }

  async requestData() {
    this.setState({ isLoading: true });
    const response = await fetch(`${URL}${this.state.page}`);
    const data = await response.json();
    this.setState({
      news: data.data,
      isLoading: false
    });
  }

  render() {
    return (
      <div id="hh">
        <HHHeader />
        <section>
          <HHSideBar topics={this.state.topics} />
          <HHContent
            news={this.state.news}
            count={this.state.numberOfItemsToShow}
            changenumberofitemstoshow={this.changeNumberOfItemsToShow}
            newsfeedfilter={this.state.newsfeedfilter}
            filterchangehandler={this.filterChangeHandler}
            isLoading={this.state.isLoading}
            onChangeDayHandler={this.onChangeDayHandler}
          />
        </section>
      </div>
    );
  }
}

export default HackerHuntApp;

// Search query https://hn.algolia.com/api/v1/search?query=app&tags=show_hn
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

HHSideBar.propTypes = {
  topics: PropTypes.array
};

const Topics = props => {
  const { data } = props;
  return <nav>{data.map(e => <TopicItem key={e.name} item={e} />)}</nav>;
};

Topics.propTypes = {
  data: PropTypes.array
};

const TopicItem = props => {
  const { item } = props;
  return (
    <div>
      <a className="" href={`/topic/${item.name}/trending`}>
        <span className={'thumb ' + item.icon} />
        <strong>{item.name}</strong>
      </a>
    </div>
  );
};

TopicItem.propTypes = {
  item: PropTypes.object
};

const HHContent = props => {
  const { news, count, changenumberofitemstoshow, newsfeedfilter, filterchangehandler, isLoading, onChangeDayHandler } = props;

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="list">
      <header>
        <h3>Today</h3>
        <NewsFeedFilter newsfeedfilter={newsfeedfilter} filterchangehandler={filterchangehandler} />
      </header>
      <NewsFeedList data={news} count={count} filter={newsfeedfilter} />
      <NewsFeedGetMore news={news} count={count} changenumberofitemstoshow={changenumberofitemstoshow} />
      <footer>
        <a onClick={onChangeDayHandler}>Previous day</a>
      </footer>
    </div>
  );
};

HHContent.propTypes = {
  news: PropTypes.array,
  count: PropTypes.number,
  changenumberofitemstoshow: PropTypes.func,
  newsfeedfilter: PropTypes.string,
  filterchangehandler: PropTypes.func,
  isLoading: PropTypes.bool,
  onChangeDayHandler: PropTypes.func
};

const NewsFeedFilter = props => {
  const { filterchangehandler } = props;
  return (
    <select className="newsfeedfilter" id="newsfilter" onChange={filterchangehandler}>
      <option tag="votes">Popular</option>
      <option tag="date">Newest</option>
      <option tag="comments">Comments</option>
    </select>
  );
};

NewsFeedFilter.propTypes = {
  filterchangehandler: PropTypes.func
};

const NewsFeedList = props => {
  const { data, count, filter } = props;
  const votesSort = (a, b) => (parseInt(a.votes) > parseInt(b.votes) ? -1 : 1);
  const newestSort = (a, b) => (parseInt(a.date) > parseInt(b.date) ? -1 : 1);
  const commentsSort = (a, b) => (parseInt(a.comments) > parseInt(b.comments) ? -1 : 1);
  let sortFunction = votesSort;
  switch (filter) {
    case 'votes':
      sortFunction = votesSort;
      break;
    case 'date':
      sortFunction = newestSort;
      break;
    case 'comments':
      sortFunction = commentsSort;
      break;
    default:
      break;
  }
  const list = data.sort(sortFunction);
  return list.map((newsItem, i) => (i < count ? <NewsItem key={i} item={newsItem} /> : ''));
};

const NewsItem = props => {
  const { item } = props;
  return (
    <article>
      <a href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank">
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
          <time>{item.date}</time>
          <span> by </span>
          <a href={`/author/${item.author}`}>{item.author}</a>
          <NewsTagList tags={item.tags} />
        </summary>
      </div>
    </article>
  );
};

NewsItem.propTypes = {
  item: PropTypes.object
};

const NewsTagList = props => {
  const { tags } = props;
  return tags.split(',').map((tag, i) => <NewsTagItem key={i} tag={tag} />);
};

const NewsTagItem = props => {
  const { tag } = props;
  return (
    <a className="tag" href={`/topic/${tag}/trending`}>
      {tag}
    </a>
  );
};

NewsTagItem.propTypes = {
  tag: PropTypes.string
};

const NewsFeedGetMore = props => {
  const { news, count, changenumberofitemstoshow } = props;
  const countleft = news.length - count > 10 ? 10 : news.length - count;
  const shouldShowGetMore = countleft > 0;
  return (
    <div>
      {shouldShowGetMore ? (
        <strong className="expand-link" onClick={changenumberofitemstoshow}>
          Show {countleft} more
        </strong>
      ) : (
        ''
      )}
    </div>
  );
};

NewsFeedGetMore.propTypes = {
  news: PropTypes.array,
  count: PropTypes.number,
  changenumberofitemstoshow: PropTypes.func
};
