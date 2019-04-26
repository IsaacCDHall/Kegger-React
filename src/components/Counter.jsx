import React from "react";
import PropTypes from 'prop-types';
import kombuchaList from '../model/kombuchaList.js';

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    kombuchaList;
    this.state = {
      count: props.initialVolume

    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleDrinkSelection = this.handleDrinkSelection.bind(this);
  }

  handleDrinkSelection(drink) {
    this.setState({drinkSelected: drink});
    console.log('new Select', this.state.drinkSelected);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <style jsx>{`
          .fa-angle-down{
            margin-left: 20px;
          }
          i:hover{
            color: #EF8726;
          }
          `}
        </style>
        <div>Pints Remaining: {this.state.count}</div>
        <i onClick={this.increment} className="fas fa-angle-up fa-2x"></i>
        <i onClick={this.decrement} className="fas fa-angle-down fa-2x"></i>
      </div>
    );
  }
}
