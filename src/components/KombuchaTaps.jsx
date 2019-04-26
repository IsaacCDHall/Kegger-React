import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

function NotBeer(props){

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
          font-size: 125%;
        }

        .divStyles {
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          text-align:center;
          border: 2px solid #3CC330;
          border-radius: 25%;
          background-color:rgba(244, 154, 192,0.3);
        }

        `}
      </style>
      <h3>{props.name}</h3>

      <div className='divStyles'>

        {
          props.details.map((bev,i)=>{
            console.log(props.volume)
            return <p key={i}>{bev}</p>;
          })
        }
        <br/>
        <Counter initialVolume={124}/>
      </div>

    </div>
  );
}

NotBeer.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
  volume: PropTypes.number
};

export  default NotBeer;
