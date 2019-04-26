import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter ({initialVolume}){

  let [count, setCount] = useState(initialVolume);
  console.log(count);

  return (
    <div>
      <style jsx>{`
      div{
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 100%;
        width:98%;
      }
      .fa-angle-down{
        margin-left: 20px;

      }
      i:hover{
        color: #EF8726;
      }
      .countText{
        font-size:130%;
      }
      `}
      </style>

      <div>Pints Remaining:<br/> <span className='countText'>{count}</span></div>

      <i onClick={() => setCount(count + 1)} className="fas fa-angle-up fa-2x"></i>
      <i onClick={() => setCount(count - 1)} className="fas fa-angle-down fa-2x"></i>
    </div>
  );
}
Counter.propTypes = {
  initialVolume: PropTypes.number
};

export default Counter;
// import React from 'react';
// import kombuchaList from '../model/kombuchaList.js';
//
// export default class Counter extends React.Component {
//   constructor(props){
//     super(props);
//     kombuchaList;
//     this.state = {
//       count: props.initialVolume
//
//     };
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.handleDrinkSelection = this.handleDrinkSelection.bind(this);
//   }
//
//   handleDrinkSelection(drink) {
//     this.setState({drinkSelected: drink});
//     console.log('new Select', this.state.drinkSelected);
//   }
//
//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//
//   decrement() {
//     this.setState({
//       count: this.state.count - 1
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <style jsx>{`
//           .fa-angle-down{
//             margin-left: 20px;
//           }
//           i:hover{
//             color: #EF8726;
//           }
//           `}
//         </style>
//         <div>Pints Remaining: {this.state.count}</div>
//         <i onClick={this.increment} className="fas fa-angle-up fa-2x"></i>
//         <i onClick={this.decrement} className="fas fa-angle-down fa-2x"></i>
//       </div>
//     );
//   }
// }
