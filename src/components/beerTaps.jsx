import React from 'react';
import PropTypes from 'prop-types';


function Beers(props){

  console.log(props);

  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
          font-family: Allerta;
          max-width: 100vw;
          // max-height:105vh;
          // max-height:80vh;
          overflow:hidden;
          border: 1px dotted gold;
        }
        h3{
          text-align:center;
          color: #f61c6c;
          text-transform: uppercase;
          font-size: 125%;
        }

        .divStyles {
          display: flex;
          flex-flow: row wrap;
          text-align:center;
          width: 100%;
          // background-color: red;
          justify-content: center;
          margin: 10px 35px 0 0;
          border: none;
        }

        `}
      </style>
      <h3>{props.name}</h3>
      <div className='divStyles'>
        <ul >
          {
            props.details.map((bev,i)=>{
              return <p key={i}>{bev}</p>;
            })
          }
        </ul>
      </div>

    </div>
  );
}

Beers.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array
};

export  default Beers;
