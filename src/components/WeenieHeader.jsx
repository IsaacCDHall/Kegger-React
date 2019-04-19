import React from 'react';
import sand from '../assets/images/sand.jpg';
function Bg(){


  return(
    <div>
      <style jsx> {`
          width: 100vw;
          height: auto;
          text-align: center;
			`}
      </style>
      <img src={sand} alt="Background Image of sand"></img>

    </div>
  );
}

export default Bg;
