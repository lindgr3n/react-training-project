import React from 'react';

const GithubHeader = props => {
  return (
    <div className="position-relative js-header-wrapper ">
      <a href="#start-of-content" tabIndex="1" className="bg-black text-white p-3 show-on-focus js-skip-to-content">
        Skip to content
      </a>
      <div id="js-pjax-loader-bar" className="pjax-loader-bar">
        <div className="progress" />
      </div>
      <header className="Header  f5" role="banner">
        <div className="d-flex px-3 flex-justify-between container-lg">
          <div className="d-flex flex-justify-between">
            <a className="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
              <svg aria-hidden="true" className="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
          <div className="HeaderMenu d-flex flex-justify-between flex-auto">
            <div className="d-flex">
              <div className="">
                <div className="header-search scoped-search site-scoped-search js-site-search" role="search">
                  <form
                    acceptCharset="UTF-8"
                    action="/okonet/lint-staged/search"
                    className="js-site-search-form"
                    data-scoped-search-url="/okonet/lint-staged/search"
                    data-unscoped-search-url="/search"
                    method="get"
                  >
                    <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                      <input name="utf8" type="hidden" value="✓" />
                    </div>
                    <label className="form-control header-search-wrapper js-chromeless-input-container">
                      <a href="/okonet/lint-staged/issues" className="header-search-scope no-underline">
                        This repository
                      </a>
                      <input
                        type="text"
                        className="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
                        data-hotkey="s"
                        name="q"
                        value=""
                        placeholder="Search"
                        aria-label="Search this repository"
                        data-unscoped-placeholder="Search GitHub"
                        data-scoped-placeholder="Search"
                        autoCapitalize="off"
                      />
                      <input type="hidden" className="js-site-search-type-field" name="type" />
                    </label>
                  </form>
                </div>
              </div>
              <ul className="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
                <li>
                  <a
                    href="/pulls"
                    aria-label="Pull requests you created"
                    className="js-selected-navigation-item HeaderNavlink px-2"
                    data-ga-click="Header, click, Nav menu - item:pulls context:user"
                    data-hotkey="g p"
                    data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
                  >
                    Pull requests
                  </a>
                </li>
                <li>
                  <a
                    href="/issues"
                    aria-label="Issues you created"
                    className="js-selected-navigation-item HeaderNavlink px-2"
                    data-ga-click="Header, click, Nav menu - item:issues context:user"
                    data-hotkey="g i"
                    data-selected-links="/issues /issues/assigned /issues/mentioned /issues"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="/marketplace"
                    className="js-selected-navigation-item HeaderNavlink px-2"
                    data-ga-click="Header, click, Nav menu - item:marketplace context:user"
                    data-selected-links=" /marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="/explore"
                    className="js-selected-navigation-item HeaderNavlink px-2"
                    data-ga-click="Header, click, Nav menu - item:explore"
                    data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex">
              <ul className="user-nav d-flex flex-items-center list-style-none" id="user-links">
                <li className="dropdown js-menu-container">
                  <span className="d-inline-block  px-2" />
                </li>

                <li className="dropdown js-menu-container">
                  <details className="dropdown-details js-dropdown-details d-flex px-2 flex-items-center">
                    <summary className="HeaderNavlink" aria-label="Create new…" data-ga-click="Header, create new, icon:add">
                      <svg aria-hidden="true" className="octicon octicon-plus float-left mr-1 mt-1" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                        <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z" />
                      </svg>
                      <span className="dropdown-caret mt-1" />
                    </summary>

                    <ul className="dropdown-menu dropdown-menu-sw">
                      <a className="dropdown-item" href="/new" data-ga-click="Header, create new repository">
                        New repository
                      </a>

                      <a className="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
                        Import repository
                      </a>

                      <a className="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
                        New gist
                      </a>

                      <a className="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
                        New organization
                      </a>

                      <div className="dropdown-divider" />
                      <div className="dropdown-header">
                        <span title="okonet/lint-staged">This repository</span>
                      </div>
                      <a className="dropdown-item" href="/okonet/lint-staged/issues/new" data-ga-click="Header, create new issue">
                        New issue
                      </a>
                    </ul>
                  </details>
                </li>

                <li className="dropdown js-menu-container">
                  <details className="dropdown-details js-dropdown-details d-flex pl-2 flex-items-center">
                    <summary className="HeaderNavlink name mt-1" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar">
                      <img alt="@lindgr3n" className="avatar float-left mr-1" src="https://avatars1.githubusercontent.com/u/24882614?s=40&amp;v=4" height="20" width="20" />
                      <span className="dropdown-caret" />
                    </summary>

                    <ul className="dropdown-menu dropdown-menu-sw">
                      <li className="dropdown-header header-nav-current-user css-truncate">
                        Signed in as <strong className="css-truncate-target">lindgr3n</strong>
                      </li>

                      <li className="dropdown-divider" />

                      <li>
                        <a className="dropdown-item" href="/lindgr3n" data-ga-click="Header, go to profile, text:your profile">
                          Your profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/lindgr3n?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
                          Your stars
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">
                          Your Gists
                        </a>
                      </li>

                      <li className="dropdown-divider" />

                      <li>
                        <a className="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
                          Help
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
                          Settings
                        </a>
                      </li>

                      <li>
                        <form acceptCharset="UTF-8" action="/logout" className="logout-form" method="post">
                          <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                            <input name="utf8" type="hidden" value="✓" />
                            <input name="authenticity_token" type="hidden" value="H0Yd5GMNGMX6cbjumYmjYPNiC2yDt79hVFMT6iiboTIMpeFD6QgpDoAmUZ/btXU02bZOk4nYWbAFT+0/BRk5Jg==" />
                          </div>
                          <button type="submit" className="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
                            Sign out
                          </button>
                        </form>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <form acceptCharset="UTF-8" action="/logout" className="sr-only right-0" method="post">
                <div style={{ margin: 0, padding: 0, display: 'inline' }}>
                  <input name="utf8" type="hidden" value="✓" />
                  <input name="authenticity_token" type="hidden" value="ZAtq7LuLrCvyvUxDEePZ3pF9xjQb/HMFu4K0XOPKWLB36JZLMY6d4IjqpTJT3w+Ku6mDyxGTldTqnkqJzkjApA==" />
                </div>
                <button type="submit" className="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default GithubHeader;
