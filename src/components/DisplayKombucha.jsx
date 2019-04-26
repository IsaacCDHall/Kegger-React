import React from 'react';
import Weenie from './WeenieHeader';
import NotBeer from './KombuchaTaps';
import kombuchaList from '../model/kombuchaList.js';

// console.log(availableProduce);
function DisplayKombucha(){
  return(
    <div>
      <style jsx>{`
        section{
          // padding:10px;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 2%;
          max-width:75vw;
          margin:auto;
          // overflow:hidden;
        }
        `}
      </style>
      <Weenie/>
      <section>
        {kombuchaList.map((bev, index) =>
          <NotBeer
            name={bev.drinkName}
            details={bev.details}
            key={index}
            volume={bev.volume}
          />
        )}
      </section>
    </div>

  );
}

export default DisplayKombucha;
