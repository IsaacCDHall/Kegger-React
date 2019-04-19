import React from 'react';
import DisplaySchedule from './DisplaySchedule';
import Pineapple from './Pineapple';
import SplashHeader from './SplashHeader';

function Splash(){
  return (
    <div>
      <style jsx>{`
        div{
          // max-height:100%;
          max-width:100%;
        }

			`}

      </style>

      <SplashHeader/>
      <Pineapple/>
    </div>
  );
}

export default Splash;
