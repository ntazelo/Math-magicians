import './Calculator.css';
import { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, operation, next } = data;
  const buttonPressHandler = (e) => {
    setData((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <div className="calculator-cont">
      <h2 className="heading">Let&apos;s do some Math!</h2>
      <div className="container">
        <div type="number" className="field-inp">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" onClick={buttonPressHandler} className="state-number">AC</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">+/-</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">%</button>
        <button type="button" onClick={buttonPressHandler} className="action-btn">÷</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">7</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">8</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">9</button>
        <button type="button" onClick={buttonPressHandler} className="action-btn">x</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">4</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">5</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">6</button>
        <button type="button" onClick={buttonPressHandler} className="action-btn">-</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">1</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">2</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">3</button>
        <button type="button" onClick={buttonPressHandler} className="action-btn">+</button>
        <button type="button" onClick={buttonPressHandler} className="state-number mod">0</button>
        <button type="button" onClick={buttonPressHandler} className="state-number">.</button>
        <button type="button" onClick={buttonPressHandler} className="action-btn">=</button>
      </div>
    </div>
  );
};

export default Calculator;
