import React, { Component } from 'react';

import { NEWSFEED_DATA, TOPICS_DATA } from './data';

import './HackerHuntApp.css';

class HackerHuntApp extends Component {
  render() {
    return (
      <div id="hh">
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
        <section>
          <aside className="">
            <div>
              <h3>Topics</h3>
              <nav>
                <div>
                  <a className="" href="/topic/development/trending">
                    <span className="thumb development" />
                    <strong>Development</strong>
                  </a>
                </div>
              </nav>
            </div>
          </aside>
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
            <div>
              <article>
                <a href="//news.ycombinator.com/item?id=15718337" target="_blank">
                  <span>
                    <em>▲</em>
                    55
                  </span>
                  <span>
                    <em>
                      <svg className="comment-12" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z" />
                        </g>
                      </svg>
                    </em>
                  </span>
                </a>
                <div>
                  <h2>
                    <a href="https://github.com/maxchehab/quickfix#quickfix" target="_blank">
                      Quickfix
                    </a>
                    <sup>
                      <span>This submission has been on Hacker News front page</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
                        <path fill="#ff6600" d="M6 9l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573 1.763-3.573 1.763 3.573 3.943.573-2.853 2.781.674 3.927z" />
                      </svg>
                    </sup>
                  </h2>
                  <p className="desc">the best stupid idea for fixing problems in node modules</p>
                  <summary>
                    <time>18 hours ago</time>
                    by
                    <a href="/author/flaque">flaque</a>
                    <a className="tag" href="/topic/media/trending">
                      media
                    </a>
                    <a className="tag" href="/topic/open-source/trending">
                      open-source
                    </a>
                    <a className="tag" href="/topic/javascript/trending">
                      javascript
                    </a>
                  </summary>
                </div>
              </article>
              <strong className="expand-link">Show 11 more</strong>
            </div>
            <footer>
              <a href="/page/1">Previous day</a>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default HackerHuntApp;

const Topics = props => {
  const { data } = props;
  return <nav>{data.map(e => <TopicItem key={e.name} item={e} />)}</nav>;
};

const TopicItem = props => {
  const { item } = props;
  return (
    <div>
      <a className="" href="#">
        <span className="thumb development" />
        <strong>{item.name}</strong>
      </a>
    </div>
  );
};

const NeewsFeedList = props => {
  const { data } = props;
  return (
    <div className="list">
      <header data-reactid="70">
        <h3 data-reactid="71">Today</h3>
        <div className="dropdown off" data-reactid="72">
          <strong data-reactid="73">popular</strong>
          <ul data-reactid="74">
            <a href="/newest" data-reactid="75">
              Newest
            </a>
            <a href="/comments" data-reactid="76">
              Comments
            </a>
          </ul>
        </div>
      </header>
      {data.map((newsItem, i) => {
        return <NeewsItem key={i} item={newsItem} />;
      })}
    </div>
  );
};

const NeewsItem = props => {
  const { item } = props;
  return (
    <article>
      <a href="#" target="_blank">
        <span>
          <em>▲</em>25
        </span>
        <span>
          <em className="fa fa-comment" />21
        </span>
      </a>
      <div>
        <h2>
          <a href="#" target="_blank">
            AspectRat.io
          </a>
          <sup>
            <span>This submission has been on Hacker News front page</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
              <path fill="#ff6600" d="M6 9l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573 1.763-3.573 1.763 3.573 3.943.573-2.853 2.781.674 3.927z" />
            </svg>
          </sup>
        </h2>
        <p className="desc">Aspect ratio calculator and device resolutions resource</p>
        <summary>
          <time>7 hours ago</time>
          <a href="#">ryanhefner</a>
          <a className="tag" href="#">
            system
          </a>
          <a className="tag" href="#">
            visual
          </a>
        </summary>
      </div>
    </article>
  );
};

/*
My grid take on it
<div className="container">
      <div className="row">
        <div className="col">
          <h4>{item.ups}</h4>
        </div>
        <div className="col-11">
          <h4>{item.name}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>{item.comments}</h3>
        </div>
        <div className="col-11">{item.descr}</div>
      </div>
      <div className="row">
        <div className="col" />
        <div className="col-11">{item.modified}</div>
      </div>
    </div>


<article>
  <a href="#" target="_blank">
    <span><em>▲</em>25</span>
    <span><em>FA</em>21</span>
  </a>
  <div>
    <h2>
      <a href="#" target="_blank" >AspectRat.io</a>
      <sup>
        <span>This submission has been on Hacker News front page</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
          <path fill="#ff6600" d="M6 9l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573 1.763-3.573 1.763 3.573 3.943.573-2.853 2.781.674 3.927z"></path>
        </svg>
      </sup>
    </h2>
    <p class="desc">Aspect ratio calculator and device resolutions resource</p>
    <summary >
      <time >7 hours ago</time>
      <a href="#">ryanhefner</a>
      <a class="tag" href="#">system</a>
      <a class="tag" href="#">visual</a>
    </summary>
  </div>
</article>

ORGINAL
<article data-reactid="137">
  <a href="//news.ycombinator.com/item?id=15721340" target="_blank" data-reactid="138">
    <span data-reactid="139">
      <em data-reactid="140">▲</em>
      25
    </span>
    <span data-reactid="144">
      <em data-reactid="145">
        <svg class="comment-12" width="12" height="12" xmlns="http://www.w3.org/2000/svg" data-reactid="146">
          <g data-reactid="147">
            <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z" data-reactid="148"></path>
          </g>
        </svg>
        21
      </em>
    </span>
  </a>
  <div data-reactid="152">
    <h2 data-reactid="153">
      <a href="https://aspectrat.io" target="_blank" data-reactid="154">AspectRat.io</a>
      <sup data-reactid="155">
        <span data-reactid="156">This submission has been on Hacker News front page</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" data-reactid="157">
          <path fill="#ff6600" d="M6 9l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573 1.763-3.573 1.763 3.573 3.943.573-2.853 2.781.674 3.927z" data-reactid="158"></path>
        </svg>
      </sup>
    </h2>
    <p class="desc" data-reactid="159">Aspect ratio calculator and device resolutions resource</p>
    <summary data-reactid="160">
      <time data-reactid="161">7 hours ago</time>
      <a href="/author/ryanhefner" data-reactid="163">ryanhefner</a>
      <a class="tag" href="/topic/system/trending" data-reactid="164">system</a>
      <a class="tag" href="/topic/visual/trending" data-reactid="165">visual</a>
    </summary>
  </div>
</article>


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
*/
