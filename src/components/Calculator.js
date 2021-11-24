import './Calculator.css';
import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="container">
        <div type="number" className="field-inp">0</div>
        <button type="button" className="state-number">AC</button>
        <button type="button" className="state-number">+/-</button>
        <button type="button" className="state-number">%</button>
        <button type="button" className="action-btn">/</button>
        <button type="button" className="state-number">7</button>
        <button type="button" className="state-number">8</button>
        <button type="button" className="state-number">9</button>
        <button type="button" className="action-btn">*</button>
        <button type="button" className="state-number">4</button>
        <button type="button" className="state-number">5</button>
        <button type="button" className="state-number">6</button>
        <button type="button" className="action-btn">-</button>
        <button type="button" className="state-number">1</button>
        <button type="button" className="state-number">2</button>
        <button type="button" className="state-number">3</button>
        <button type="button" className="action-btn">+</button>
        <button type="button" className="state-number mod">0</button>
        <button type="button" className="state-number">.</button>
        <button type="button" className="action-btn">=</button>
      </div>
    );
  }
}

export default Calculator;
