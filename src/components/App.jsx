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
      kombuchaList: kombuchaList,
      emptyBoy: []
    };
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleSellPint(kombucha){
    console.log('hi');
    let newState = Object.assign([], this.state.kombuchaList);
    for (let i=0; i<newState.length; i++){
      if (newState[i].id === kombucha.id){
        newState[i].volume --;
        console.log(newState[i].volume);
      }
    }
    this.setState({kombuchaList: newState});
  }

  handleDeleteKeg(kombucha){
    console.log('hi2');
    let newStateZ = Object.assign([], this.state.kombuchaList);
    for (let i=0; i<newStateZ.length; i++){
      if (newStateZ[i].id === kombucha.id){
        newStateZ[i].volume --;
        console.log(newStateZ[i].volume);
      };
    };
    this.setState({kombuchaList: newStateZ});

  };


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
          <Route exact path ='/Kombucha_On_Tap' component={() => <DisplayKombucha kombuchaList={this.state.kombuchaList} handleSellPint={this.handleSellPint} handleDeleteKeg={this.handleDeleteKeg}/>}/>
        </Switch>

      </div>
    );

  }
}


export default App;
