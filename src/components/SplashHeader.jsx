import React from 'react';
import splashHeader from '../assets/images/KeggerTaproom.svg';
function SplashHeader(){


  return(
    <div>
      <style jsx> {`
          width: auto;
          height: auto;
          text-align: center;
			`}
      </style>
      <img src={splashHeader} alt="Kegger Taproom Logo"></img>

    </div>
  );
}

export default SplashHeader;
