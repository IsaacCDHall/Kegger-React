import React from 'react';
import PropTypes from 'prop-types';


function Beers(props){

  console.log(props);

  return (
    <div>
      <style jsx>{`
        div {
          color: #5B4381;
          font-family: Allerta;
          // border: 1px dotted gold;
        }
        h3{
          text-align:center;
          color: #89980E;
          text-transform: uppercase;
          font-size: 125%;
        }

        .divStyles {
          border: 1px solid #5C3F27;
          background-color:rgba(92, 63, 39,0.3);
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          text-align:center;
        }
        .fa-angle-down{
          margin-left: 20px;
        }

        `}
      </style>
      <h3>{props.name}</h3>
      <div className='divStyles'>
        {
          props.details.map((bev,z)=>{
            return <p key={z}>{bev}</p>;
          })

        }
        <div>
          <i className="fas fa-angle-up fa-2x"></i>
          <i className="fas fa-angle-down fa-2x"></i>
        </div>
      </div>

    </div>
  );
}

Beers.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
  volume: PropTypes.number
};

export  default Beers;
