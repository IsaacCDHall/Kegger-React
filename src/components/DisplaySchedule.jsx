import React from 'react';
import Schedule from './Schedule';
import MarketSchedule from '../model/LocationData.js';

function DisplaySchedule(){
  return (
    <div>
      <style jsx>{`
          div{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1%;
            max-width:99vw;
          }

      `}

      </style>
      {MarketSchedule.map((schedule, index) =>
        <Schedule day={schedule.day}
          location={schedule.location}
          hours={schedule.hours}
          booth={schedule.booth}
          key={index}/>
      )}
    </div>
  );
}

export default DisplaySchedule;
