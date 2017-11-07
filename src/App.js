import React, { Component } from 'react';
import GMap from './Components/Map.js';
import Slider from './Components/Slider.js';
import './App.css';

class App extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     width: '0', 
  //     height: '0' 
  //   };
  //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  // }
  
  //header doesn't even show :()
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <h3 className="App-title">Map Demo</h3>
        </header>
        <div className="flexbox">
            <GMap/>
        </div>
        <Slider/>
      </div>
    );
  }
}

export default App;
