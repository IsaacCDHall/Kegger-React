import React from 'react';
import saltySpittoon from '../assets/images/saltySpittoon.png';
function SaltySpittoon(){


  return(
    <div>
      <style jsx> {`
        width: auto;
        height: auto;
        text-align: center;
        min-width:auto;
        min-height:30vh;
			`}
      </style>
      <img src={saltySpittoon} alt="Salty Spittoon Image"></img>

    </div>
  );
}

export default SaltySpittoon;
