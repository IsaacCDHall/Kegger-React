import React from 'react';
import Links from './Links';
import Icon from './Icon';



function Footer(){
  return (
    <div>
      <style jsx>{`
        div{
          // border: 1px solid pink;
          display:block;
          position:relative;
        }
     `}</style>
      <Links/>
      <Icon/>

    </div>
  );
}

export default Footer;
