import React from 'react';
import Splash from './Splash';
import Links from './Links';
import Icon from './Icon';
// import Sand from './Bg';
import Login from './Login';
import Register from './Register';
import DisplayBeer from './DisplayBeer';
import DisplayKombucha from './DisplayKombucha';
import ErrFour from './ErrFour';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);
// import Body from './Body';
// import Icon from './Icon';
// import Nav from './Nav';
// import Ticket from './Links';


import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
          *{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          body {
            background-color: tan;
            margin: 0;
            padding: 0;
            color: whitesmoke;
            height: 100%;
            width: 100%;
          }
        `}</style>
      <Links/>
      <Icon/>
      <br/>
      <Switch>
        <Route exact path ='/' component={Splash}/>
        <Route exact path ='/Login' component={Login}/>
        <Route exact path ='/Register' component={Register} />
        <Route exact path ='/Beer_On_Tap' component={DisplayBeer}/>
        <Route exact path ='/Kombucha_On_Tap' component={DisplayKombucha}/>
      </Switch>

    </div>
  );
}


export default App;
