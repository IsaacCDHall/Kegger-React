import React from 'react';
import bridge from '../assets/images/bridge.jpg';
function Img(){


  return(
    <div>
      <style jsx> {`
          width: 100vw;
          height: auto;
			`}
      </style>
      <img src={bridge} alt="Tilikum Crossing light up night market"></img>

    </div>
  );
}

export default Img;
