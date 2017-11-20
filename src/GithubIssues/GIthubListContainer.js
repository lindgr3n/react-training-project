import React from 'react';

const GithubListContainer = props => {
  return (
    <div>
      <div className="table-list-header" id="js-issues-toolbar">
        <div className="table-list-filters">
          <div className="table-list-header-toggle states float-left pl-3">
            <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue" className="btn-link selected">
              <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                <path
                  fillRule="evenodd"
                  d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                />
              </svg>
              20 Open
            </a>

            <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aclosed" className="btn-link ">
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
              </svg>
              137 Closed
            </a>
          </div>

          <div className="table-list-header-toggle float-right">
            <div
              className="float-left select-menu js-menu-container js-select-menu js-load-contents"
              data-contents-url="/okonet/lint-staged/issues/show_menu_content?partial=issues%2Ffilters%2Fauthors_content&amp;q=is%3Aissue+is%3Aopen"
            >
              <button className="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false" data-hotkey="u">
                Author
              </button>

              <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                <div className="select-menu-modal">
                  <div className="select-menu-header">
                    <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                      <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                    </svg>
                    <span className="select-menu-title">Filter by author</span>
                  </div>

                  <div className="js-select-menu-deferred-content" />
                  <div className="select-menu-loading-overlay anim-pulse">
                    <svg aria-hidden="true" className="octicon octicon-octoface" height="32" version="1.1" viewBox="0 0 16 16" width="32">
                      <path
                        fillRule="evenodd"
                        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="float-left select-menu label-select-menu js-menu-container js-select-menu js-load-contents"
              data-contents-url="/okonet/lint-staged/issues/show_menu_content?partial=issues%2Ffilters%2Flabels_content&amp;q=is%3Aissue+is%3Aopen"
            >
              <button className="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false" data-hotkey="l">
                Labels
              </button>

              <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                <div className="select-menu-modal">
                  <div className="select-menu-header">
                    <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                      <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                    </svg>
                    <span className="select-menu-title">Filter by label</span>
                  </div>

                  <div className="js-select-menu-deferred-content" />
                  <div className="select-menu-loading-overlay anim-pulse">
                    <svg aria-hidden="true" className="octicon octicon-octoface" height="32" version="1.1" viewBox="0 0 16 16" width="32">
                      <path
                        fillRule="evenodd"
                        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="float-left select-menu js-menu-container js-select-menu js-load-contents"
              data-contents-url="/okonet/lint-staged/issues/show_menu_content?partial=issues%2Ffilters%2Fprojects_content&amp;pulls_only=false&amp;q=is%3Aissue+is%3Aopen"
            >
              <button className="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false" data-hotkey="m">
                Projects
              </button>

              <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                <div className="select-menu-modal">
                  <div className="select-menu-header">
                    <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                      <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                    </svg>
                    <span className="select-menu-title">Filter by project</span>
                  </div>

                  <div className="js-select-menu-deferred-content" />
                  <div className="select-menu-loading-overlay anim-pulse">
                    <svg aria-hidden="true" className="octicon octicon-octoface" height="32" version="1.1" viewBox="0 0 16 16" width="32">
                      <path
                        fillRule="evenodd"
                        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="float-left select-menu js-menu-container js-select-menu"
              data-contents-url="/okonet/lint-staged/issues/show_menu_content?partial=issues%2Ffilters%2Fmilestones_content&amp;q=is%3Aissue+is%3Aopen"
            >
              <button className="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false" data-hotkey="m">
                Milestones
              </button>

              <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                <div className="select-menu-modal">
                  <div className="select-menu-header">
                    <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                      <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                    </svg>
                    <span className="select-menu-title">Filter by milestone</span>
                  </div>

                  <div className="js-select-menu-deferred-content">
                    <div className="select-menu-filters">
                      <div className="select-menu-text-filter">
                        <input
                          type="text"
                          id="milestones-filter-field"
                          className="form-control js-filterable-field js-navigation-enable"
                          placeholder="Filter milestones"
                          aria-label="Filter milestones"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div className="select-menu-list">
                      <div data-filterable-for="milestones-filter-field" data-filterable-type="substring">
                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+no%3Amilestone" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-text">
                            <strong>Issues with no milestone</strong>
                          </div>
                        </a>

                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+milestone%3Av4.0" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-text">v4.0</div>
                        </a>
                      </div>

                      <div className="select-menu-no-results">No milestones found. Sorry about that.</div>
                    </div>
                  </div>
                  <div className="select-menu-loading-overlay anim-pulse">
                    <svg aria-hidden="true" className="octicon octicon-octoface" height="32" version="1.1" viewBox="0 0 16 16" width="32">
                      <path
                        fillRule="evenodd"
                        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="float-left select-menu js-menu-container js-select-menu"
              data-contents-url="/okonet/lint-staged/issues/show_menu_content?partial=issues%2Ffilters%2Fassigns_content&amp;q=is%3Aissue+is%3Aopen"
            >
              <button className="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false" data-hotkey="a">
                Assignee
              </button>

              <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                <div className="select-menu-modal">
                  <div className="select-menu-header">
                    <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                      <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                    </svg>
                    <span className="select-menu-title">Filter by who’s assigned</span>
                  </div>

                  <div className="js-select-menu-deferred-content">
                    <div className="select-menu-filters">
                      <div className="select-menu-text-filter">
                        <input
                          type="text"
                          id="assigns-filter-field"
                          className="form-control js-filterable-field js-navigation-enable"
                          placeholder="Filter users"
                          aria-label="Filter users"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div className="select-menu-list" data-filter="assignee">
                      <div data-filterable-for="assigns-filter-field" data-filterable-type="substring">
                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-text">
                            <strong>Assigned to nobody</strong>
                          </div>
                        </a>

                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+assignee%3Alindgr3n" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-gravatar">
                            <img alt="@lindgr3n" height="30" src="https://avatars2.githubusercontent.com/u/24882614?s=60&amp;v=4" width="30" />
                          </div>
                          <div className="select-menu-item-text">
                            lindgr3n
                            <span className="description-inline">Johan Lindgren</span>
                          </div>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+assignee%3Aluftywiranda13" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-gravatar">
                            <img alt="@luftywiranda13" height="30" src="https://avatars1.githubusercontent.com/u/22868432?s=60&amp;v=4" width="30" />
                          </div>
                          <div className="select-menu-item-text">
                            luftywiranda13
                            <span className="description-inline">Lufty Wiranda</span>
                          </div>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+assignee%3Aokonet" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-gravatar">
                            <img alt="@okonet" height="30" src="https://avatars0.githubusercontent.com/u/11071?s=60&amp;v=4" width="30" />
                          </div>
                          <div className="select-menu-item-text">
                            okonet
                            <span className="description-inline">Andrey Okonetchnikov</span>
                          </div>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+assignee%3Asudo-suhas" className="select-menu-item js-navigation-item js-navigation-open ">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-gravatar">
                            <img alt="@sudo-suhas" height="30" src="https://avatars3.githubusercontent.com/u/22251956?s=60&amp;v=4" width="30" />
                          </div>
                          <div className="select-menu-item-text">
                            sudo-suhas
                            <span className="description-inline">Suhas Karanth</span>
                          </div>
                        </a>
                      </div>

                      <form
                        acceptCharset="UTF-8"
                        action="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue"
                        className="select-menu-new-item-form js-issues-custom-filter"
                        data-name="assignee"
                        method="get"
                      >
                        <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                          <input name="utf8" type="hidden" value="✓" />
                        </div>
                        <div className="select-menu-item js-navigation-item js-new-item-form">
                          <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                          </svg>
                          <div className="select-menu-item-text">
                            <span className="select-menu-item-heading">
                              assignee:<span className="js-new-item-name" />
                            </span>
                            <span className="description">Filter by this user</span>
                            <input type="hidden" name="q" value="is:issue is:open" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="select-menu-loading-overlay anim-pulse">
                    <svg aria-hidden="true" className="octicon octicon-octoface" height="32" version="1.1" viewBox="0 0 16 16" width="32">
                      <path
                        fillRule="evenodd"
                        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-left select-menu js-menu-container js-select-menu">
              <button className="btn-link select-menu-button icon-only js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
                Sort<span className="sort-label" />
              </button>

              <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                <div className="select-menu-modal">
                  <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                    <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                      <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                    </svg>
                    <span className="select-menu-title">Sort by</span>
                  </div>

                  <div className="select-menu-list" role="menu">
                    <div>
                      <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue" className="select-menu-item js-navigation-item js-navigation-open selected" role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Newest</div>
                      </a>
                      <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc" className="select-menu-item js-navigation-item js-navigation-open " role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Oldest</div>
                      </a>
                      <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc" className="select-menu-item js-navigation-item js-navigation-open " role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Most commented</div>
                      </a>
                      <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-asc" className="select-menu-item js-navigation-item js-navigation-open " role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Least commented</div>
                      </a>
                      <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc" className="select-menu-item js-navigation-item js-navigation-open " role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Recently updated</div>
                      </a>
                      <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc" className="select-menu-item js-navigation-item js-navigation-open " role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Least recently updated</div>
                      </a>

                      <div className="select-menu-item select-menu-item-parent js-navigation-item " role="menuitem">
                        <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                        </svg>
                        <div className="select-menu-item-text">Most reactions</div>

                        <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc" className="reaction-sort-item js-navigation-item ">
                          <g-emoji alias="+1" className="emoji" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" ios-version="6.0">
                            <span role="img" aria-label="thumb up">
                              👍
                            </span>
                          </g-emoji>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions--1-desc" className="reaction-sort-item js-navigation-item ">
                          <g-emoji alias="-1" className="emoji" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png" ios-version="6.0">
                            <span role="img" aria-label="thumb down">
                              👎
                            </span>
                          </g-emoji>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-smile-desc" className="reaction-sort-item js-navigation-item ">
                          <g-emoji alias="smile" className="emoji" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" ios-version="6.0">
                            <span role="img" aria-label="happy">
                              😄
                            </span>
                          </g-emoji>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-tada-desc" className="reaction-sort-item js-navigation-item ">
                          <g-emoji alias="tada" className="emoji" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png" ios-version="6.0">
                            <span role="img" aria-label="fireworks">
                              🎉
                            </span>
                          </g-emoji>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-thinking_face-desc" className="reaction-sort-item js-navigation-item ">
                          <g-emoji alias="thinking_face" className="emoji" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png" ios-version="6.0">
                            <span role="img" aria-label="sad">
                              😕
                            </span>
                          </g-emoji>
                        </a>
                        <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-heart-desc" className="reaction-sort-item js-navigation-item ">
                          <g-emoji alias="heart" className="emoji" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" ios-version="6.0">
                            <span role="img" aria-label="heart">
                              ❤️
                            </span>
                          </g-emoji>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-right border-bottom border-left">
        <ul className="js-navigation-container js-active-navigation-container">
          <li id="issue_330" className="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read navigation-focus" data-id="272310010">
            <div className="d-table table-fixed width-full Box-row--drag-hide position-relative">
              <div className="float-left pt-2 pl-3">
                <span className="tooltipped tooltipped-n" aria-label="Open issue">
                  <svg aria-hidden="true" className="octicon octicon-issue-opened open" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                    <path
                      fillRule="evenodd"
                      d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                    />
                  </svg>
                </span>
              </div>

              <div className="float-left pt-2 pl-2" />

              <div className="float-left col-9 p-2 lh-condensed">
                <a href="/okonet/lint-staged/issues/330" className="link-gray-dark no-underline h4 js-navigation-open">
                  Tests for getConfig.js
                </a>
                <span className="labels">
                  <a
                    href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"
                    className="label v-align-text-top labelstyle-159818 linked-labelstyle-159818"
                    style={{ backgroundColor: '#159818', color: '#fff' }}
                    title="Label: help wanted"
                  >
                    help wanted
                  </a>
                </span>
                <div className="mt-1 text-small text-gray">
                  <span className="opened-by">
                    #330 opened{' '}
                    <relative-time datetime="2017-11-08T18:55:47Z" title="8 nov. 2017 19:55 CET">
                      12 days ago
                    </relative-time>{' '}
                    by
                    <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+author%3AAndrew1024" className="muted-link" title="Open issues created by Andrew1024">
                      Andrew1024
                    </a>
                  </span>

                  <span className="issue-meta-section css-truncate issue-milestone ml-2" />
                </div>
              </div>

              <div className="float-right col-2">
                <div className="float-left col-7 pt-2 pr-3 text-right">
                  <div className="AvatarStack AvatarStack--right ">
                    <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to Andrew1024">
                      <a href="/okonet/lint-staged/issues?q=assignee%3AAndrew1024+is%3Aopen" aria-label="Andrew1024's assigned issues" className="avatar">
                        <img alt="@Andrew1024" className="from-avatar" height="20" src="https://avatars0.githubusercontent.com/u/14871665?s=40&amp;v=4" width="20" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="float-right col-5 no-wrap pt-2 pr-3 text-right">
                  <a href="/okonet/lint-staged/issues/330" className="muted-link" aria-label="1 comment">
                    <svg aria-hidden="true" className="octicon octicon-comment v-align-middle" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z" />
                    </svg>
                    <span className="text-small text-bold">1</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li id="issue_329" className="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read" data-id="271892077">
            <div className="d-table table-fixed width-full Box-row--drag-hide position-relative">
              <div className="float-left pt-2 pl-3">
                <span className="tooltipped tooltipped-n" aria-label="Open issue">
                  <svg aria-hidden="true" className="octicon octicon-issue-opened open" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                    <path
                      fillRule="evenodd"
                      d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                    />
                  </svg>
                </span>
              </div>

              <div className="float-left pt-2 pl-2" />
              <div className="float-left col-9 p-2 lh-condensed">
                <a href="/okonet/lint-staged/issues/329" className="link-gray-dark no-underline h4 js-navigation-open">
                  Detect non-tty output
                </a>
                <span className="labels">
                  <a
                    href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement"
                    className="label v-align-text-top labelstyle-84b6eb linked-labelstyle-84b6eb"
                    style={{ backgroundColor: '#84b6eb', color: '#1c2733' }}
                    title="Label: enhancement"
                  >
                    enhancement
                  </a>
                  <a
                    href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"
                    className="label v-align-text-top labelstyle-159818 linked-labelstyle-159818"
                    style={{ backgroundColor: '#159818', color: '#fff' }}
                    title="Label: help wanted"
                  >
                    help wanted
                  </a>
                </span>
                <div className="mt-1 text-small text-gray">
                  <span className="opened-by">
                    #329 opened{' '}
                    <relative-time datetime="2017-11-07T16:16:45Z" title="7 nov. 2017 17:16 CET">
                      13 days ago
                    </relative-time>{' '}
                    by
                    <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+author%3Avictornoel" className="muted-link" title="Open issues created by victornoel">
                      victornoel
                    </a>
                  </span>
                  <span className="issue-meta-section css-truncate issue-milestone ml-2" />
                </div>
              </div>
              <div className="float-right col-2">
                <div className="float-left col-7 pt-2 pr-3 text-right">
                  <div className="AvatarStack AvatarStack--right ">
                    <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to " />
                  </div>
                </div>
                <div className="float-right col-5 no-wrap pt-2 pr-3 text-right">
                  <a href="/okonet/lint-staged/issues/329" className="muted-link" aria-label="4 comments">
                    <svg aria-hidden="true" className="octicon octicon-comment v-align-middle" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z" />
                    </svg>
                    <span className="text-small text-bold">4</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="paginate-container" />
    </div>
  );
};

export default GithubListContainer;
