import React, { Component } from 'react';
import { ISSUES_DATA } from './data';

class GithubIssuesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: ISSUES_DATA
    };
  }
  render() {
    return <GithubIssues issues={this.state.issues} />;
  }
}

export default GithubIssuesApp;

const GithubIssues = props => {
  const { issues } = props;
  return (
    <div style={{ padding: 10 }}>
      <GithubIssuesHeader />
      <GithubIssuesList issues={issues} />
    </div>
  );
};

const GithubIssuesHeader = props => {
  return <div style={{ backgroundColor: '#f6f8fa', border: '1px solid #e1e4e8', borderRadius: '3px 3px 0 0' }}>Header</div>;
};

const GithubIssuesList = props => {
  const { issues } = props;
  return (
    <ul style={{ border: '1px solid #e1e4e8' }}>
      {issues.map(issue => {
        return <GithubIssuesListItem key={issue.id} issue={issue} />;
      })}
    </ul>
  );
};

const GithubIssuesListItem = props => {
  const { issue } = props;
  return (
    <li style={{ display: 'flex', flexDirection: 'row', padding: 10, borderTop: '1px solid #e1e4e8' }}>
      <GithubIssuesListStatus state={issue.state} />
      <div style={{ display: 'flex', flexDirection: 'column', padding: 8, lineHeight: 1.25 }}>
        <span style={{ fontSize: 16, fontWeight: '600' }}>{issue.title}</span>
        <span style={{ fontSize: 12, marginTop: 4 }}>
          #{issue.number} opened {issue.created_at} ago by {issue.user.login}
        </span>
      </div>
      <span style={{ alignSelf: 'flex-end' }}>comment</span>
    </li>
  );
};

const GithubIssuesListStatus = props => {
  const { state } = props;
  let value = '';
  if (state === 'closed') {
    value = 'C';
  }
  if (state === 'open') {
    value = (
      <svg aria-hidden="true" style={{ color: '#28a745', fill: '#28a745' }} height="16" version="1.1" viewBox="0 0 14 16" width="14">
        <path
          fillRule="evenodd"
          d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
        />
      </svg>
    );
  }
  return <span style={{ padding: 8 }}>{value}</span>;
};
