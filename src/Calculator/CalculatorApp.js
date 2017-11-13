import React, { Component } from 'react';

import Calculator from './Calculator';

const operators = ['%', '+', '-', 'Clear', '='];

class CaclculatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      operator: ''
    };
    this.valueClick = this.valueClick.bind(this);
    // this.operatorClick = this.operatorClick.bind(this);
  }
  valueClick(value) {
    console.log(value);
    let result = parseInt(this.state.result);
    let operator = this.isOperator(value);

    if (operator) {
      if (operator === 'Clear') {
        this.setState({
          operator: '',
          result: 0
        });
        return;
      } else if (operator === '=') {
        this.setState({
          operator: ''
        });
        return;
      }
      this.setState({
        operator: value
      });
      return;
    } else {
      operator = this.state.operator;
    }

    switch (operator) {
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
        this.setState({
          result: value
        });
        break;
    }
  }

  isOperator(value) {
    return operators.find(e => e === value);
  }

  /* operatorClick(value) {
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
 */
  render() {
    return <Calculator operator={this.state.operator} result={this.state.result} valueClick={this.valueClick} />;
  }
}

export default CaclculatorApp;
