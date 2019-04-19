import React from 'react';
import pineapple from '../assets/images/pineapple.svg';
function Pineapple(){


  return(
    <div>
      <style jsx> {`
          width: 300px;
          height: auto;
          // text-align: center;
          margin:auto;
			`}
      </style>
      <img src={pineapple} alt="Image of Spongebob's Pineapple Home"></img>

    </div>
  );
}

export default Pineapple;
