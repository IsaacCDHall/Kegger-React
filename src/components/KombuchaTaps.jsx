// import PropTypes from 'prop-types';
// import Counter from './Counter';
// // import React, { useState } from 'react';
// import React, {Component} from 'react';
//
// function NotBeer(props){
//
//   onSellPint(){
//    let newVolume = props.volume - 1; props.handleSellPint(props.id, newVolume)
//   }
//   console.log(props);
//   return (
//     <div>
//       <style jsx>{`
//         div {
//           font-family: Allerta;
//           // border: 1px dotted gold;
//         }
//         h3 {
//           text - align: center;
//           color: #29A0C3;
//           text-transform: uppercase;
//           font-size: 135%;
//         }
//
//         .divStyles {
//           border: 2px solid # 3 CC330;
//           border - radius: 25 % ;
//           background - color: rgba(244, 154, 192, 0.3);
//           display: flex;
//           flex - flow: row;
//           justify - content: space - around;
//           align - items: center;
//           justify - content;
//           center;
//         }
//         .contentBox {
//             display: flex;
//             flex - flow: column wrap;
//             width: auto;
//
//         }
//         .styleItems {
//
//         }
//         .counterBox {
//             display: flex;
//             width: auto;
//             align-items: center;
//             justify-content:center;
//         }
//       `}
//       </style>
//       <h3>{props.name}</h3>
//       <div className='divStyles'>
//         <div className='contentBox' onClick={onSellPint}>
//           {
//             props.details.map((bev,i)=>{
//               return <p className='styleItems' key={i}>{bev}</p>;
//             })
//           }
//         </div>
//
//         <div className='counterBox'>
//           <Counter initialVolume={props.volume} />
//         </div>
//
//       </div>
//
//     </div>
//
//   );
// }
//
// NotBeer.propTypes = {
//   name: PropTypes.string.isRequired,
//   details: PropTypes.array,
//   volume: PropTypes.number
// };
//
// export default NotBeer;

import PropTypes from 'prop-types';
import Counter from './Counter';
import React, { useState } from 'react';

function NotBeer(props){

  function sellPint(){
    props.handleSellPint({id: props.id});
  }
  function deleteKeg(){
    props.handleDeleteKeg({id: props.id});
    console.log(props)
  }
  console.log(props);
  return (
    <div>
      <style jsx>{`
        div {
          font-family: Allerta;
          // border: 1px dotted gold;

        }
        h3{
          text-align:center;
          color: #29A0C3;
          text-transform: uppercase;
          font-size: 135%;
        }

        .divStyles {
          border: 2px solid #3CC330;
          border-radius: 25%;
          background-color:rgba(244, 154, 192,0.3);
          display:flex;
          flex-flow: row;
          justify-content: space-around;
          align-items: center;
          justify-content; center;
        }
        .contentBox{
          display:flex;
          flex-flow: column wrap;
          width:auto;

        }
        .styleItems{

        }
        .counterBox{
          display:flex;
          width:auto;

          align-items: center;
          justify-content: center;
        }
        .buttonStyles{
          border: 1px solid black;
        }
      `}
      </style>
      <h3>{props.name}</h3>
      <div className='divStyles'>
        <div className='contentBox'>
          {
            props.details.map((bev,i)=>{
              return <p className='styleItems' key={i}>{bev}</p>;
            })
          }
        </div>

        <div className='counterBox'>
          <p>
            hook-edit >
          </p>
          <Counter
            initialVolume={props.volume}
          />
          <p>Edit-state ></p>
          <i onClick={sellPint} className="fas fa-angle-down fa-2x"></i>
        </div>
        <i onClick ={deleteKeg} className="far fa-trash-alt fa-2x"></i>

      </div>

    </div>

  );
}

NotBeer.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
  volume: PropTypes.number,
  id: PropTypes.number
};

export default NotBeer;
