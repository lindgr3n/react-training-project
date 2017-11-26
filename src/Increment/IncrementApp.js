import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import Counter from './Counter';

const defaultState = {
  counter: 0
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(reducer, defaultState, enhancers);

const IncrementApp = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default IncrementApp;
