import React from 'react';
import SaltySpittoon from './SpittoonHeader';
import Beers from './BeerTaps';
import beerList from '../model/beerList.js';


// console.log(availableProduce);
function DisplayBeer(){
  return(
    <div>
      <style jsx>{`
        section{
          // padding:10px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2%;
          margin:auto;
          max-width:75vw;
        }
        `}
      </style>
      <SaltySpittoon/>
      <section>
        {beerList.map((bev, index) =>
          <Beers
            name={bev.beerName}
            details={bev.details}
            key={index}
          />
        )}
      </section>
    </div>

  );
}

export default DisplayBeer;
