import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from './action_creators';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    /* this.setState({
      counter: this.state.counter + 1
    }); */
    // this.props.dispatch({ type: 'INCREMENT' });
  }

  onDecrement() {
    /* this.setState({
      counter: this.state.counter - 1
    }); */
    // this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <ValueButton text="-" changeHandler={this.props.decrement /* this.onDecrement */} />
        <CounterValue value={this.props.counter} />
        <ValueButton text="+" changeHandler={this.props.increment /* this.onIncrement */} />
      </div>
    );
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

// export default IncrementApp;
// Connect actionCreators so we can dispatch an action directly inside our changeHandler
export default connect(mapStateToProps, actionCreators)(Counter);

const CounterValue = props => {
  const { value } = props;
  return <input readOnly value={value} />;
};

CounterValue.propTypes = {
  value: PropTypes.number.isRequired
};

const ValueButton = props => {
  const { text, changeHandler } = props;
  return <button onClick={changeHandler}>{text}</button>;
};

ValueButton.propTypes = {
  text: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired
};
