import React from 'react';
import * as math from 'mathjs';

import Button from './component/Button';
import Input from './component/Input';
import ClearButton from './component/ClearButton';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  writeToInput = (value) => {
    this.setState({
      input: this.state.input + value,
    });
  }

  handleEqual = () => {
    this.setState({input : math.eval(this.state.input)});
  }




  render() {
    return (
      <div className="app">
        <div className="calculator-container">
          <Input input= {this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.writeToInput}>7</Button>
            <Button handleClick={this.writeToInput}>8</Button>
            <Button handleClick={this.writeToInput}>9</Button>
            <Button handleClick={this.writeToInput}>/</Button>
          </div>

          <div className="row">
            <Button handleClick={this.writeToInput}>4</Button>
            <Button handleClick={this.writeToInput}>5</Button>
            <Button handleClick={this.writeToInput}>6</Button>
            <Button handleClick={this.writeToInput}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.writeToInput}>1</Button>
            <Button handleClick={this.writeToInput}>2</Button>
            <Button handleClick={this.writeToInput}>3</Button>
            <Button handleClick={this.writeToInput}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={this.writeToInput}>.</Button>
            <Button handleClick={this.writeToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.writeToInput}>-</Button>
          </div>

          <ClearButton 
          handleClear= {()=>{this.setState({input: ''})}}>Clear</ClearButton>
        </div>
      </div>
    );
  }
}

export default App;
