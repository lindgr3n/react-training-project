import React from 'react';
import './CalculatorApp.css';

const CaclculatorApp = props => {
  const valueClick = value => {
    console.log(value);
  };

  const operatorClick = value => {
    console.log('operator: ' + value);
  };

  return (
    <div className="grid">
      <div className="result">0</div>
      <div className="button clear">Clear</div>
      <div className="button del operator">
        <CalculatorButton value="%" onClick={operatorClick} />
      </div>

      <div className="button seven">
        <CalculatorButton value="7" onClick={valueClick} />
      </div>
      <div className="button eight">
        <CalculatorButton value="8" onClick={valueClick} />
      </div>
      <div className="button nine">
        <CalculatorButton value="9" onClick={valueClick} />
      </div>
      <div className="button remove operator">
        <CalculatorButton value="-" onClick={operatorClick} />
      </div>

      <div className="button four">
        <CalculatorButton value="4" onClick={valueClick} />
      </div>
      <div className="button five">
        <CalculatorButton value="5" onClick={valueClick} />
      </div>
      <div className="button six">
        <CalculatorButton value="6" onClick={valueClick} />
      </div>
      <div className="button add operator">
        <CalculatorButton value="+" onClick={operatorClick} />
      </div>

      <div className="button one">
        <CalculatorButton value="1" onClick={valueClick} />
      </div>
      <div className="button two">
        <CalculatorButton value="2" onClick={valueClick} />
      </div>
      <div className="button three">
        <CalculatorButton value="3" onClick={valueClick} />
      </div>
      <div className="button equal operator">
        <CalculatorButton value="=" onClick={operatorClick} />
      </div>
    </div>
  );
};

export default CaclculatorApp;

const CalculatorButton = props => {
  const { value, onClick } = props;
  return <div onClick={() => onClick(value)}>{value}</div>;
};
