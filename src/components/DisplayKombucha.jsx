// import Weenie from './WeenieHeader';
// import KombuchaTaps from './KombuchaTaps';
// import Counter from './Counter';
// import React, {Component} from 'react';
//
// console.log(availableProduce);
// function DisplayKombucha(props){
//   console.log(props);
//   return(
//     <div>
//       <style jsx>{`
//           section{
//             // padding:10px;
//             display: grid;
//             grid-template-columns: repeat(1, 1fr);
//             grid-gap: 2%;
//             max-width:75vw;
//             margin:auto;
//             overflow:hidden;
//             text-align:center;
//           }
//           .leftNut{
//              text-align: center;
//           }
//         `}
//       </style>
//       <Weenie/>
//       <section>
//         <div className='leftNut'>
//           {props.kombuchaList.map((bev, index) =>
//              <KombuchaTaps
//                name={bev.drinkName}
//                details={bev.details}
//                key={index}
//                volume={bev.volume} handleSellPint={props.handleSellPint}
//                />
//            )}
//
//          </div>
//       </section>
//     </div >
//
//   );
// }
//
// export default DisplayKombucha;

import Weenie from './WeenieHeader';
import NotBeer from './KombuchaTaps';
import kombuchaList from '../model/kombuchaList.js';
import Counter from './Counter';
import React from 'react';

// console.log(availableProduce);
function DisplayKombucha(){
  console.log(Counter);
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
          text-align:center;
        }
        .mapFunc{
          text-align: center;
        }
      `}
      </style>
      <Weenie/>
      <section>
        <div className='mapFunc'>
          {kombuchaList.map((bev, index) =>
            <NotBeer
              name={bev.drinkName}
              details={bev.details}
              key={index}
              volume={bev.volume}
            />
          )}

        </div>
      </section>
    </div>

  );
}

export default DisplayKombucha;
