import React, { Component } from 'react';

class IncrementApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onDecrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <ValueButton text="-" changeHandler={this.onDecrement} />
        <Counter value={this.state.counter} />
        <ValueButton text="+" changeHandler={this.onIncrement} />
      </div>
    );
  }
}

const Counter = props => {
  const { value } = props;
  return <input readOnly value={value} />;
};

const ValueButton = props => {
  const { text, changeHandler } = props;
  return <button onClick={changeHandler}>{text}</button>;
};

export default IncrementApp;
