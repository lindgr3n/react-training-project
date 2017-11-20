import React, { Component } from 'react';

import './GithubIssuesApp.css';
import './GithubIssuesApp2.css';

import GithubHeader from './GithubHeader';
import GithubContent from './GithubContent';
import GithubFooter from './GithubFooter';

class GithubIssuesApp extends Component {
  render() {
    return (
      <div>
        <GithubHeader />
        <GithubContent />
        <GithubFooter />
      </div>
    );
  }
}

export default GithubIssuesApp;
