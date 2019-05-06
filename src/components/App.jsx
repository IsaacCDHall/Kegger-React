import React, {Component} from 'react';
import Splash from './Splash';
import Links from './Links';
import Icon from './Icon';
// import Sand from './Bg';
import DisplayKombucha from './DisplayKombucha';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import kombuchaList from '../model/kombuchaList.js';

library.add(faStroopwafel);

import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      kombuchaList: kombuchaList
    };
  }

  handleSellPint(id, newValue){
    let newState = Object.assign({}, this.state.kombuchaList);
    newState[id].volume = newValue;
  }

  render(){
    console.log(this.state.kombuchaList[1]);
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
          <Route exact path ='/Kombucha_On_Tap' component={() => <DisplayKombucha kombuchaList={this.state.kombuchaList} handleSellPint={this.handleSellPint}/>}/>
        </Switch>

      </div>
    );

  }
}


export default App;
