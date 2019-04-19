import React from 'react';
import saltySpittoon from '../assets/images/saltySpittoon.png';
function SaltySpittoon(){


  return(
    <div>
      <style jsx> {`
          width: 200px;
          height: auto;
          text-align: center;
			`}
      </style>
      <img src={saltySpittoon} alt="Salty Spittoon Image"></img>

    </div>
  );
}

export default SaltySpittoon;
