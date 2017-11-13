import React, { Component } from 'react';
import './CalculatorApp.css';

class CaclculatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      operator: ''
    };
    this.valueClick = this.valueClick.bind(this);
    this.operatorClick = this.operatorClick.bind(this);
  }
  valueClick(value) {
    console.log(value);
    let result = parseInt(this.state.result);

    if (!this.state.operator) {
      this.setState({
        result: value
      });
      return;
    }
    switch (this.state.operator) {
      case '%':
        this.setState({
          result: result / parseInt(value)
        });
        break;
      case '-':
        this.setState({
          result: result - parseInt(value)
        });
        break;
      case '+':
        this.setState({
          result: result + parseInt(value)
        });
        break;

      default:
        break;
    }
  }

  operatorClick(value) {
    console.log('operator: ' + value);

    if (value === 'Clear') {
      this.setState({
        operator: '+',
        result: 0
      });
    } else {
      this.setState({
        operator: value
      });
    }
  }

  render() {
    return (
      <div className="grid">
        <div className="result">
          <Result value={this.state.result} />
        </div>
        <div className="button clear">
          <CalculatorButton value="Clear" onClick={this.operatorClick} />
        </div>
        <div className="button del operator">
          <CalculatorButton value="%" onClick={this.operatorClick} />
        </div>

        <div className="button seven">
          <CalculatorButton value="7" onClick={this.valueClick} />
        </div>
        <div className="button eight">
          <CalculatorButton value="8" onClick={this.valueClick} />
        </div>
        <div className="button nine">
          <CalculatorButton value="9" onClick={this.valueClick} />
        </div>
        <div className="button remove operator">
          <CalculatorButton value="-" onClick={this.operatorClick} />
        </div>

        <div className="button four">
          <CalculatorButton value="4" onClick={this.valueClick} />
        </div>
        <div className="button five">
          <CalculatorButton value="5" onClick={this.valueClick} />
        </div>
        <div className="button six">
          <CalculatorButton value="6" onClick={this.valueClick} />
        </div>
        <div className="button add operator">
          <CalculatorButton value="+" onClick={this.operatorClick} />
        </div>

        <div className="button one">
          <CalculatorButton value="1" onClick={this.valueClick} />
        </div>
        <div className="button two">
          <CalculatorButton value="2" onClick={this.valueClick} />
        </div>
        <div className="button three">
          <CalculatorButton value="3" onClick={this.valueClick} />
        </div>
        <div className="button equal operator">
          <CalculatorButton value="=" onClick={this.operatorClick} />
        </div>
      </div>
    );
  }
}

export default CaclculatorApp;

const CalculatorButton = props => {
  const { value, onClick } = props;
  return <div onClick={() => onClick(value)}>{value}</div>;
};

const Result = props => {
  const { value } = props;
  return <div>{value}</div>;
};
