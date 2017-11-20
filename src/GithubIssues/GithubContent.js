import React from 'react';

const GithubContent = props => {
  return (
    <div role="main">
      <div itemScope="" itemType="http://schema.org/SoftwareSourceCode">
        <div id="js-repo-pjax-container" data-pjax-container="">
          <div className="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav ">
            <div className="repohead-details-container clearfix container ">
              <ul className="pagehead-actions">
                <li>
                  <form acceptCharset="UTF-8" action="/notifications/subscribe" className="js-social-container" data-autosubmit="true" data-remote="true" method="post">
                    <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                      <input name="utf8" type="hidden" value="✓" />
                      <input name="authenticity_token" type="hidden" value="kpkXUUdlrho4bmLC6hRWI291dlBySVOrzDH4kO8AOUfbymwzPr79j65XxXa18QD3c6f1xVsQ0FOu3TKo3mREYg==" />
                    </div>
                    <input className="form-control" id="repository_id" name="repository_id" type="hidden" value="49704723" />

                    <div className="select-menu js-menu-container js-select-menu">
                      <a
                        href="/okonet/lint-staged/subscription"
                        className="btn btn-sm btn-with-count select-menu-button js-menu-target"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Toggle repository notifications menu"
                        data-ga-click="Repository, click Watch settings, action:issues#index"
                      >
                        <span className="js-select-button">
                          <svg aria-hidden="true" className="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                            <path
                              fillRule="evenodd"
                              d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                            />
                          </svg>
                          Watch
                        </span>
                      </a>
                      <a className="social-count js-social-count" href="/okonet/lint-staged/watchers" aria-label="14 users are watching this repository">
                        14
                      </a>

                      <div className="select-menu-modal-holder">
                        <div className="select-menu-modal subscription-menu-modal js-menu-content">
                          <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                            <svg aria-label="Close" className="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12">
                              <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" />
                            </svg>
                            <span className="select-menu-title">Notifications</span>
                          </div>

                          <div className="select-menu-list js-navigation-container" role="menu">
                            <div className="select-menu-item js-navigation-item selected" role="menuitem" tabIndex="0">
                              <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                              </svg>
                              <div className="select-menu-item-text">
                                <input defaultChecked="checked" id="do_included" name="do" type="radio" value="included" />
                                <span className="select-menu-item-heading">Not watching</span>
                                <span className="description">Be notified when participating or @mentioned.</span>
                                <span className="js-select-button-text hidden-select-button-text">
                                  <svg aria-hidden="true" className="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                                    <path
                                      fillRule="evenodd"
                                      d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                                    />
                                  </svg>
                                  Watch
                                </span>
                              </div>
                            </div>

                            <div className="select-menu-item js-navigation-item " role="menuitem" tabIndex="0">
                              <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                              </svg>
                              <div className="select-menu-item-text">
                                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                                <span className="select-menu-item-heading">Watching</span>
                                <span className="description">Be notified of all conversations.</span>
                                <span className="js-select-button-text hidden-select-button-text">
                                  <svg aria-hidden="true" className="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                                    <path
                                      fillRule="evenodd"
                                      d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                                    />
                                  </svg>
                                  Unwatch
                                </span>
                              </div>
                            </div>

                            <div className="select-menu-item js-navigation-item " role="menuitem" tabIndex="0">
                              <svg aria-hidden="true" className="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
                              </svg>
                              <div className="select-menu-item-text">
                                <input id="do_ignore" name="do" type="radio" value="ignore" />
                                <span className="select-menu-item-heading">Ignoring</span>
                                <span className="description">Never be notified.</span>
                                <span className="js-select-button-text hidden-select-button-text">
                                  <svg aria-hidden="true" className="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                                    <path
                                      fillRule="evenodd"
                                      d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"
                                    />
                                  </svg>
                                  Stop ignoring
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </li>

                <li>
                  <div className="js-toggler-container js-social-container starring-container ">
                    <form acceptCharset="UTF-8" action="/okonet/lint-staged/unstar" className="starred js-social-form" method="post">
                      <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                        <input name="utf8" type="hidden" value="✓" />
                        <input name="authenticity_token" type="hidden" value="Dus5jS64UW825Y667XDD6MPPBMrK2QpbDYmuzGhOmv/dYFi6pPf5odRtpWbRgmssMouqtRHsAcO/KZoKgpK6GQ==" />
                      </div>
                      <input type="hidden" name="context" value="repository" />
                      <button
                        type="submit"
                        className="btn btn-sm btn-with-count js-toggler-target"
                        aria-label="Unstar this repository"
                        title="Unstar okonet/lint-staged"
                        data-ga-click="Repository, click unstar button, action:issues#index; text:Unstar"
                      >
                        <svg aria-hidden="true" className="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                          <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z" />
                        </svg>
                        Unstar
                      </button>
                      <a className="social-count js-social-count" href="/okonet/lint-staged/stargazers" aria-label="1623 users starred this repository">
                        1,623
                      </a>
                    </form>

                    <form acceptCharset="UTF-8" action="/okonet/lint-staged/star" className="unstarred js-social-form" method="post">
                      <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                        <input name="utf8" type="hidden" value="✓" />
                        <input name="authenticity_token" type="hidden" value="4+/RGp8FzrwKC3D6x71NwY5eEzSSK5+iWE7dVhfSQtgVg9BfOilQOz42ka6MEzQaeDhRRi9rkkO+hzIEusSHwg==" />
                      </div>
                      <input type="hidden" name="context" value="repository" />
                      <button
                        type="submit"
                        className="btn btn-sm btn-with-count js-toggler-target"
                        aria-label="Star this repository"
                        title="Star okonet/lint-staged"
                        data-ga-click="Repository, click star button, action:issues#index; text:Star"
                      >
                        <svg aria-hidden="true" className="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                          <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z" />
                        </svg>
                        Star
                      </button>
                      <a className="social-count js-social-count" href="/okonet/lint-staged/stargazers" aria-label="1623 users starred this repository">
                        1,623
                      </a>
                    </form>
                  </div>
                </li>

                <li>
                  <form acceptCharset="UTF-8" action="/okonet/lint-staged/fork" className="btn-with-count" method="post">
                    <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                      <input name="utf8" type="hidden" value="✓" />
                      <input name="authenticity_token" type="hidden" value="xeGmY2PETKsooq2gYYxdPLfiUrLmYXK+wK/fkQfUG4ywIc6OsDEm1t7Bb0V4RF20Ww6v3ki4tx3258GVFLyNxQ==" />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-sm btn-with-count"
                      data-ga-click="Repository, show fork modal, action:issues#index; text:Fork"
                      title="Fork your own copy of okonet/lint-staged to your account"
                      aria-label="Fork your own copy of okonet/lint-staged to your account"
                    >
                      <svg aria-hidden="true" className="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10">
                        <path
                          fillRule="evenodd"
                          d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                        />
                      </svg>
                      Fork
                    </button>
                  </form>
                  <a href="/okonet/lint-staged/network" className="social-count" aria-label="77 users forked this repository">
                    77
                  </a>
                </li>
              </ul>

              <h1 className="public ">
                <svg aria-hidden="true" className="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  />
                </svg>
                <span className="author" itemProp="author">
                  <a href="/okonet" className="url fn" rel="author">
                    okonet
                  </a>
                </span>

                <span className="path-divider">/</span>

                <strong itemProp="name">
                  <a href="/okonet/lint-staged" data-pjax="#js-repo-pjax-container">
                    lint-staged
                  </a>
                </strong>
              </h1>
            </div>

            <nav className="reponav js-repo-nav js-sidenav-container-pjax container" itemScope="" itemType="http://schema.org/BreadcrumbList" data-pjax="#js-repo-pjax-container">
              <span itemScope="" itemType="http://schema.org/ListItem" itemProp="itemListElement">
                <a
                  href="/okonet/lint-staged"
                  className="js-selected-navigation-item reponav-item"
                  data-hotkey="g c"
                  data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /okonet/lint-staged"
                  itemProp="url"
                >
                  <svg aria-hidden="true" className="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                    <path fillRule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z" />
                  </svg>
                  <span itemProp="name">Code</span>
                  <meta itemProp="position" content="1" />
                </a>
              </span>

              <span itemScope="" itemType="http://schema.org/ListItem" itemProp="itemListElement">
                <a
                  href="/okonet/lint-staged/issues"
                  className="js-selected-navigation-item selected reponav-item"
                  data-hotkey="g i"
                  data-selected-links="repo_issues repo_labels repo_milestones /okonet/lint-staged/issues"
                  itemProp="url"
                >
                  <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                    <path
                      fillRule="evenodd"
                      d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                    />
                  </svg>
                  <span itemProp="name">Issues</span>
                  <span className="Counter">20</span>
                  <meta itemProp="position" content="2" />
                </a>
              </span>

              <span itemScope="" itemType="http://schema.org/ListItem" itemProp="itemListElement">
                <a href="/okonet/lint-staged/pulls" className="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /okonet/lint-staged/pulls" itemProp="url">
                  <svg aria-hidden="true" className="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                    <path
                      fillRule="evenodd"
                      d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    />
                  </svg>
                  <span itemProp="name">Pull requests</span>
                  <span className="Counter">11</span>
                  <meta itemProp="position" content="3" />
                </a>
              </span>

              <a
                href="/okonet/lint-staged/projects"
                className="js-selected-navigation-item reponav-item"
                data-hotkey="g b"
                data-selected-links="repo_projects new_repo_project repo_project /okonet/lint-staged/projects"
              >
                <svg aria-hidden="true" className="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15">
                  <path fillRule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
                </svg>
                Projects
                <span className="Counter">1</span>
              </a>
              <a href="/okonet/lint-staged/wiki" className="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /okonet/lint-staged/wiki">
                <svg aria-hidden="true" className="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                  <path
                    fillRule="evenodd"
                    d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                  />
                </svg>
                Wiki
              </a>

              <a
                href="/okonet/lint-staged/pulse"
                className="js-selected-navigation-item reponav-item"
                data-selected-links="repo_graphs repo_contributors dependency_graph pulse /okonet/lint-staged/pulse"
              >
                <svg aria-hidden="true" className="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                  <path fillRule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z" />
                </svg>
                Insights
              </a>
            </nav>
          </div>

          <div className="container new-discussion-timeline experiment-repo-nav">
            <div className="repository-content">
              <div className="issues-listing" data-pjax="">
                <div className="container mb-4 js-notice">
                  <div className="content p-4 text-center rounded-1 border border-gray-light js-banner">
                    <div className="position-relative">
                      <form acceptCharset="UTF-8" action="/users/lindgr3n/dismiss_repository_notice" className="js-notice-dismiss" data-remote="true" method="post">
                        <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                          <input name="utf8" type="hidden" value="✓" />
                          <input name="_method" type="hidden" value="delete" />
                          <input name="authenticity_token" type="hidden" value="+/vAn9IOREjik33uPn1TkRfFpui344owSatzIQINiAPtAiwt+YIKy9hgjNiC7l+WQxuGuItc3HhMqa6+YS858Q==" />
                        </div>
                        <input type="hidden" name="notice_name" value="first_time_contributor_issues_banner" />
                        <input type="hidden" name="repository_id" value="49704723" />
                        <button
                          className="position-absolute top-0 right-0 btn-link text-blue js-dismiss"
                          data-ga-click="First-time contributor banner, dismiss, view:issues; banner_shows_all_issues:false; banner_shows_contributing_guide:false; banner_shows_open_source_guide:true; banner_shows_labels:true; label_name:nil"
                          data-ga-load="First-time contributor banner, view:issue; action:view"
                          data-octo-click="first_time_contributor_banner"
                          data-octo-dimensions="action:click_dismiss,actor_id:24882614,user_id:11071,repository_id:49704723,view:issues,banner_shows_all_issues:false,banner_shows_contributing_guide:false,banner_shows_open_source_guide:true,banner_shows_labels:true,label_name:nil"
                          name="button"
                          type="submit"
                        >
                          Dismiss
                        </button>
                      </form>
                      <button type="button" className="btn-link js-next right-0 position-absolute top-0 d-none">
                        Next
                      </button>

                      <div className="col-8 mx-auto">
                        <h4 className="mb-2">
                          <span className="mr-2">
                            <g-emoji alias="wave" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44b.png" ios-version="6.0">
                              <span role="img" aria-label="wave">
                                👋
                              </span>
                            </g-emoji>
                          </span>Want to submit an issue to okonet/lint-staged?
                        </h4>

                        <p className="m-0">
                          If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the{' '}
                          <a
                            href="https://opensource.guide"
                            data-ga-click="First-time contributor banner, open source guide, view:issues; banner_shows_all_issues:false; banner_shows_contributing_guide:false; banner_shows_open_source_guide:true; banner_shows_labels:true; label_name:nil"
                            data-octo-click="first_time_contributor_banner"
                            data-octo-dimensions="action:click_open_source_guide,actor_id:24882614,user_id:11071,repository_id:49704723,view:issues,banner_shows_all_issues:false,banner_shows_contributing_guide:false,banner_shows_open_source_guide:true,banner_shows_labels:true,label_name:nil"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Learn about Open Source and how to contribute"
                          >
                            Open Source Guide
                          </a>.
                        </p>

                        <p className="mb-0">
                          Issues labeled
                          <a
                            href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"
                            className="label v-align-text-top labelstyle-159818 linked-labelstyle-159818"
                            data-ga-click="First-time contributor banner, labeled issues, view:issues; label_name:help wanted; banner_shows_all_issues:false; banner_shows_contributing_guide:false; banner_shows_open_source_guide:true; banner_shows_labels:true"
                            data-octo-click="first_time_contributor_banner"
                            data-octo-dimensions="action:click_labeled_issues,actor_id:24882614,user_id:11071,repository_id:49704723,view:issues,label_name:help wanted,banner_shows_all_issues:false,banner_shows_contributing_guide:false,banner_shows_open_source_guide:true,banner_shows_labels:true"
                            style={{ backgroundColor: '#159818', color: '#fff' }}
                            title="Label: help wanted"
                          >
                            help wanted
                          </a>
                          can be good first contributions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subnav" data-pjax="">
                  <a href="/okonet/lint-staged/issues/new" className="btn btn-primary float-right" role="button" data-hotkey="c">
                    New issue
                  </a>

                  <div className="float-left subnav-spacer-right" role="search">
                    <div className="float-left select-menu js-menu-container js-select-menu subnav-search-context">
                      <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
                        Filters
                      </button>
                      <div className="select-menu-modal-holder js-menu-content js-navigation-container">
                        <div className="select-menu-modal">
                          <div className="select-menu-list">
                            <a href="/okonet/lint-staged/issues?q=is%3Aopen" className="select-menu-item js-navigation-item">
                              <div className="select-menu-item-text">Open issues and pull requests</div>
                            </a>
                            <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Aissue+author%3Alindgr3n" className="select-menu-item js-navigation-item">
                              <div className="select-menu-item-text">Your issues</div>
                            </a>
                            <a href="/okonet/lint-staged/issues?q=is%3Aopen+is%3Apr+author%3Alindgr3n" className="select-menu-item js-navigation-item">
                              <div className="select-menu-item-text">Your pull requests</div>
                            </a>
                            <a href="/okonet/lint-staged/issues?q=is%3Aopen+assignee%3Alindgr3n" className="select-menu-item js-navigation-item">
                              <div className="select-menu-item-text">Everything assigned to you</div>
                            </a>
                            <a href="/okonet/lint-staged/issues?q=is%3Aopen+mentions%3Alindgr3n" className="select-menu-item js-navigation-item">
                              <div className="select-menu-item-text">Everything mentioning you</div>
                            </a>
                            <a href="https://help.github.com/articles/searching-issues" className="select-menu-item js-navigation-item" target="_blank" rel="noopener noreferrer">
                              <svg aria-hidden="true" className="octicon octicon-link-external select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                                <path fillRule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z" />
                              </svg>
                              <div className="select-menu-item-text">
                                <strong>View advanced search syntax</strong>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form acceptCharset="UTF-8" action="/okonet/lint-staged/issues" className="subnav-search float-left" data-pjax="true" method="get">
                      <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                        <input name="utf8" type="hidden" value="✓" />
                      </div>
                      <input
                        aria-label="Search all issues"
                        className="form-control form-control subnav-search-input input-contrast"
                        data-hotkey="/"
                        id="js-issues-search"
                        name="q"
                        placeholder="Search all issues"
                        type="text"
                        defaultValue="is:issue is:open "
                      />
                      <svg aria-hidden="true" className="octicon octicon-search subnav-search-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                        <path
                          fillRule="evenodd"
                          d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                        />
                      </svg>
                    </form>
                  </div>

                  <div className="subnav-links float-left" role="navigation">
                    <a href="/okonet/lint-staged/labels" className="js-selected-navigation-item subnav-item" data-selected-links="repo_labels /okonet/lint-staged/labels">
                      Labels
                    </a>
                    <a href="/okonet/lint-staged/milestones" className="js-selected-navigation-item subnav-item" data-selected-links="repo_milestones /okonet/lint-staged/milestones">
                      Milestones
                    </a>
                  </div>
                </div>

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

                <div className="protip">
                  <svg aria-hidden="true" className="octicon octicon-light-bulb text-gray" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                    <path
                      fillRule="evenodd"
                      d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
                    />
                  </svg>
                  <strong>ProTip!</strong>
                  Exclude your own issues with <a href="/okonet/lint-staged/issues?q=is%3Aissue+is%3Aopen+-author%3Alindgr3n">-author:lindgr3n</a>.
                </div>
              </div>
            </div>
            <div className="modal-backdrop js-touch-events" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubContent;
