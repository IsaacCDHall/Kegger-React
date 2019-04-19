import React from 'react';
import sand from '../assets/images/sand.jpg';
function Sand(){


  return(
    <div>
      <style jsx> {`
          width: 100vw;
          height: auto;
			`}
      </style>
      <img src={sand} alt="Background Image of sand"></img>

    </div>
  );
}

export default Sand;
