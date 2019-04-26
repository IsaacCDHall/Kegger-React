// import PropTypes from 'prop-types';
// import kombuchaList from '../model/kombuchaList.js';
import React, { useState } from 'react';

function HookCounter (){

  const [count, setCount] = useState(100);

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

export default HookCounter;
