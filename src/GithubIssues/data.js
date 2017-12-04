/* eslint-disable */
export const ISSUES_DATA = [
  {
    "url": "https://api.github.com/repos/facebook/jest/issues/5008",
    "repository_url": "https://api.github.com/repos/facebook/jest",
    "labels_url": "https://api.github.com/repos/facebook/jest/issues/5008/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/jest/issues/5008/comments",
    "events_url": "https://api.github.com/repos/facebook/jest/issues/5008/events",
    "html_url": "https://github.com/facebook/jest/issues/5008",
    "id": 278934539,
    "number": 5008,
    "title": "When I created the coverage, the mock file was missed.",
    "user": {
      "login": "Alisa0026",
      "id": 13694317,
      "avatar_url": "https://avatars0.githubusercontent.com/u/13694317?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Alisa0026",
      "html_url": "https://github.com/Alisa0026",
      "followers_url": "https://api.github.com/users/Alisa0026/followers",
      "following_url": "https://api.github.com/users/Alisa0026/following{/other_user}",
      "gists_url": "https://api.github.com/users/Alisa0026/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Alisa0026/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Alisa0026/subscriptions",
      "organizations_url": "https://api.github.com/users/Alisa0026/orgs",
      "repos_url": "https://api.github.com/users/Alisa0026/repos",
      "events_url": "https://api.github.com/users/Alisa0026/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Alisa0026/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2017-12-04T09:57:42Z",
    "updated_at": "2017-12-04T09:57:42Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "__tests__/testdemo.test.js\r\n![image](https://user-images.githubusercontent.com/13694317/33543058-811f526c-d910-11e7-8d78-42dbc00c3785.png)\r\n\r\n![image](https://user-images.githubusercontent.com/13694317/33543059-812011b6-d910-11e7-9e6b-d808381a0cea.png)\r\ntestdemo/__mocks__ /sum.js \r\n![image](https://user-images.githubusercontent.com/13694317/33543076-912476ce-d910-11e7-8b5c-6a3167e380a0.png)\r\n\r\ntestdemo /sum.js \r\n![image](https://user-images.githubusercontent.com/13694317/33543112-bf31ab2c-d910-11e7-8f76-c9cc62f2f553.png)\r\n\r\nafter  `jest --coverage`  the sum.js is missing,I don't know why.Because if this file is missed, i won't know other functions in this file, whether it's  tested and covered.\r\n![image](https://user-images.githubusercontent.com/13694317/33543060-818bd158-d910-11e7-9603-b7abea204119.png)"
  },
  {
    "url": "https://api.github.com/repos/facebook/jest/issues/5005",
    "repository_url": "https://api.github.com/repos/facebook/jest",
    "labels_url": "https://api.github.com/repos/facebook/jest/issues/5005/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/jest/issues/5005/comments",
    "events_url": "https://api.github.com/repos/facebook/jest/issues/5005/events",
    "html_url": "https://github.com/facebook/jest/issues/5005",
    "id": 278761149,
    "number": 5005,
    "title": "Explain which snapshots are obsolete",
    "user": {
      "login": "crubier",
      "id": 2954572,
      "avatar_url": "https://avatars2.githubusercontent.com/u/2954572?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/crubier",
      "html_url": "https://github.com/crubier",
      "followers_url": "https://api.github.com/users/crubier/followers",
      "following_url": "https://api.github.com/users/crubier/following{/other_user}",
      "gists_url": "https://api.github.com/users/crubier/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/crubier/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/crubier/subscriptions",
      "organizations_url": "https://api.github.com/users/crubier/orgs",
      "repos_url": "https://api.github.com/users/crubier/repos",
      "events_url": "https://api.github.com/users/crubier/events{/privacy}",
      "received_events_url": "https://api.github.com/users/crubier/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 549288633,
        "url": "https://api.github.com/repos/facebook/jest/labels/Feature%20Request",
        "name": "Feature Request",
        "color": "bfdadc",
        "default": false
      },
      {
        "id": 442775532,
        "url": "https://api.github.com/repos/facebook/jest/labels/Help%20Wanted",
        "name": "Help Wanted",
        "color": "1d76db",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 2,
    "created_at": "2017-12-03T10:15:56Z",
    "updated_at": "2017-12-04T09:50:59Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "When jest finds obsolete snapshots, it does not explain which one they are. This can be very frustrating, when you have many snapshots and you can't find which one is wrong...\r\n\r\nThe problem was also shortly discussed in #3581 \r\n\r\n\r\nJest output:\r\n\r\n```\r\n › 2 obsolete snapshots found.\r\nSnapshot Summary\r\n › 2 obsolete snapshots found, run with `npm run prod-test -- -u` to remove them.\r\n\r\nTest Suites: 5 passed, 5 total\r\nTests:       211 passed, 211 total\r\nSnapshots:   190 passed, 190 total\r\nTime:        13.694s\r\nRan all test suites.\r\n```\r\n\r\nI expect an output more like:\r\n\r\n```\r\n › 2 obsolete snapshots found:\r\n   - ThisComponent\r\n   - ThisOtherComponent\r\n\r\nSnapshot Summary\r\n › 2 obsolete snapshots found, run with `npm run prod-test -- -u` to remove them.\r\n\r\nTest Suites: 5 passed, 5 total\r\nTests:       211 passed, 211 total\r\nSnapshots:   190 passed, 190 total\r\nTime:        13.694s\r\nRan all test suites.\r\n```\r\n\r\nThis is a problem for me because when I run tests locally, no snapshot are obsolete, but when run in my CI/CD, it finds 2 obsolete snapshots, without telling me which ones.... "
  }
];
