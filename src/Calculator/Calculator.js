import React from 'react';
import './Calculator.css';

const Calculator = props => {
  const { result, valueClick, operator } = props;
  return (
    <div className="grid">
      <div className="result">
        <Result value={result} operator={operator} />
      </div>
      <div className="button clear">
        <CalculatorButton value="Clear" onClick={valueClick} />
      </div>
      <div className="button del operator">
        <CalculatorButton value="%" onClick={valueClick} />
      </div>

      <div className="button value seven">
        <CalculatorButton value="7" onClick={valueClick} />
      </div>
      <div className="button value eight">
        <CalculatorButton value="8" onClick={valueClick} />
      </div>
      <div className="button value nine">
        <CalculatorButton value="9" onClick={valueClick} />
      </div>
      <div className="button remove operator">
        <CalculatorButton value="-" onClick={valueClick} />
      </div>

      <div className="button value four">
        <CalculatorButton value="4" onClick={valueClick} />
      </div>
      <div className="button value five">
        <CalculatorButton value="5" onClick={valueClick} />
      </div>
      <div className="button value six">
        <CalculatorButton value="6" onClick={valueClick} />
      </div>
      <div className="button add operator">
        <CalculatorButton value="+" onClick={valueClick} />
      </div>

      <div className="button value one">
        <CalculatorButton value="1" onClick={valueClick} />
      </div>
      <div className="button value two">
        <CalculatorButton value="2" onClick={valueClick} />
      </div>
      <div className="button value three">
        <CalculatorButton value="3" onClick={valueClick} />
      </div>
      <div className="button equal operator">
        <CalculatorButton value="=" onClick={valueClick} />
      </div>
    </div>
  );
};

export default Calculator;

const CalculatorButton = props => {
  const { value, onClick } = props;
  return <div onClick={() => onClick(value)}>{value}</div>;
};

const Result = props => {
  const { value, operator = '' } = props;
  return (
    <div style={{ verticalAlign: 'middle' }}>
      {value} <span style={{ fontSize: 8 }}>{operator}</span>
    </div>
  );
};
