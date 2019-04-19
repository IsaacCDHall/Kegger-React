import React from 'react';
import pineapple from '../assets/images/pineapple.svg';
function Pineapple(){


  return(
    <div>
      <style jsx> {`
          // width: 300px;
          height: auto;
          text-align: center;
          // min-width:auto;
          min-height:30vh;
          max-height:50vh;
          margin: auto;
          margin-top: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1%;

			`}
      </style>
      <img src={pineapple} alt="Image of Spongebob's Pineapple Home"></img>

    </div>
  );
}

export default Pineapple;
