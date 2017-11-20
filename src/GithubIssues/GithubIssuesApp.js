import React, { Component } from 'react';

import './GithubIssuesApp.css';
import './GithubIssuesApp2.css';

// import GithubHeader from './GithubHeader';
// import GithubContent from './GithubContent';
// import GithubFooter from './GithubFooter';
import GithubListContainer from './GIthubListContainer';

class GithubIssuesApp extends Component {
  render() {
    return (
      <div>
        <GithubListContainer />
      </div>
    );
  }
}

/*
<GithubHeader />
<GithubContent />
<GithubFooter />
*/
export default GithubIssuesApp;
