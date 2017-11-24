import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

const IncrementApp = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default IncrementApp;
