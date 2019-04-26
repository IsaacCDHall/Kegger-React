import PropTypes from 'prop-types';
import kombuchaList from '../model/kombuchaList.js';
import React, { useState } from 'react';

function Counter (){

  const [count, setCount] = useState(0);

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
        <i onClick={() => setCount(count + 1)} className="fas fa-angle-up fa-2x"></i>
        <i onClick={() => setCount(count - 1)} className="fas fa-angle-down fa-2x"></i>
      </div>
    );
}
