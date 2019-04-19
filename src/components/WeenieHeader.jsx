import React from 'react';
import sand from '../assets/images/weenie-hut.png';
function Weenie(){


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
      <img src={sand} alt="Weenie Hut"></img>

    </div>
  );
}

export default Weenie;
