import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){

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
      <h3>{props.month}</h3>
      <div className='divStyles'>
        <ul >
          {
            props.selection.map((produce,i)=>{
              return <p key={i}>{produce}</p>;
            })
          }
        </ul>
      </div>

    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export  default Produce;
