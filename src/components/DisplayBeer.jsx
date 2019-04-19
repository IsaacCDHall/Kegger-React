import React from 'react';
import Beers from './BeerTaps';
import beerList from '../model/beerList.js';


// console.log(availableProduce);
function DisplayBeer(){
  return(
    <div>
      <style jsx>{`
        div{
          padding:10px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1%;
          max-width:99vw;
          overflow:hidden;
        }
        `}
      </style>
      {beerList.map((bev, index) =>
        <Beers
          beerName={bev.name}
          details={bev.details}
          key={index}
        />
      )}
    </div>

  );
}

export default DisplayBeer;
