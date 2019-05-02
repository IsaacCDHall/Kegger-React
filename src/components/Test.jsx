// // import PropTypes from 'prop-types';
// // import kombuchaList from '../model/kombuchaList.js';
// import React, { useState } from 'react';
//
// function HookCounter (){
//
//   const [count, setCount] = useState(100);
//
//   return (
//     <div>
//       <style jsx>{`
//         .fa-angle-down{
//           margin-left: 20px;
//         }
//         i:hover{
//           color: #EF8726;
//         }
//         `}
//       </style>
//
//       <div>Pints Remaining: {count}</div>
//       <i onClick={() => setCount(count + 1)} className="fas fa-angle-up fa-2x"></i>
//       <i onClick={() => setCount(count - 1)} className="fas fa-angle-down fa-2x"></i>
//     </div>
//   );
// }
//
// export default HookCounter;

import Weenie from './WeenieHeader';
import KombuchaTaps from './KombuchaTaps';
import Counter from './Counter';
import React from 'react';

console.log(availableProduce);
function DisplayKombucha(props){
  console.log(props);
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
            overflow:hidden;
            text-align:center;
          }
          .leftNut{
             text-align: center;
          }
        `}
      </style>
      <Weenie/>
      <section>
        <div className='leftNut'>
          {props.kombuchaList.map((bev, index) =>
             <KombuchaTaps
               name={bev.drinkName}
               details={bev.details}
               key={index}
               volume={bev.volume} handleSellPint={props.handleSellPint}
               />
           )}

         </div>
      </section>
    </div >

  );
}

export default DisplayKombucha;






import PropTypes from 'prop-types';
import Counter from './Counter';
import React, { useState } from 'react';

function NotBeer(props){

  onSellPint(){
   let newVolume = props.volume - 1; props.handleSellPint(props.id, newVolume)
  }
  console.log(props);
  return (
    <div>
      <style jsx>{`
        div {
          font-family: Allerta;
          // border: 1px dotted gold;
        }
        h3 {
          text - align: center;
          color: #29A0C3;
          text-transform: uppercase;
          font-size: 135%;
        }

        .divStyles {
          border: 2px solid # 3 CC330;
          border - radius: 25 % ;
          background - color: rgba(244, 154, 192, 0.3);
          display: flex;
          flex - flow: row;
          justify - content: space - around;
          align - items: center;
          justify - content;
          center;
        }
        .contentBox {
            display: flex;
            flex - flow: column wrap;
            width: auto;

        }
        .styleItems {

        }
        .counterBox {
            display: flex;
            width: auto;
            align-items: center;
            justify-content:center;
        }
      `}
      </style>
      <h3>{props.name}</h3>
      <div className='divStyles'>
        <div className='contentBox' onClick={onSellPint}>
          {
            props.details.map((bev,i)=>{
              return <p className='styleItems' key={i}>{bev}</p>;
            })
          }
        </div>

        <div className='counterBox'>
          <Counter initialVolume={props.volume} />
        </div>

      </div>

    </div>

  );
}

NotBeer.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
  volume: PropTypes.number
};

export default NotBeer;
