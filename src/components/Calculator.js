import './Calculator.css';
import { Component } from 'react';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.buttonPressHandler = this.buttonPressHandler.bind(this);
  }

  buttonPressHandler(e) {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div type="number" className="field-inp">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">AC</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">+/-</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">%</button>
        <button type="button" onClick={this.buttonPressHandler} className="action-btn">÷</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">7</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">8</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">9</button>
        <button type="button" onClick={this.buttonPressHandler} className="action-btn">x</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">4</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">5</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">6</button>
        <button type="button" onClick={this.buttonPressHandler} className="action-btn">-</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">1</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">2</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">3</button>
        <button type="button" onClick={this.buttonPressHandler} className="action-btn">+</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number mod">0</button>
        <button type="button" onClick={this.buttonPressHandler} className="state-number">.</button>
        <button type="button" onClick={this.buttonPressHandler} className="action-btn">=</button>
      </div>
    );
  }
}

export default Calculator;
