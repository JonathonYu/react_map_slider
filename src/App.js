import React, { Component } from 'react';
import GMap from './Components/Map.js';
import Slider from './Components/Slider.js';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      zoom: 13 //placeholder, should propagate up value from map.js
    };
    this.handleZoomChange = this.handleZoomChange.bind(this);
  }
  
  handleZoomChange(newZoom) {
    this.setState({zoom: newZoom});
    console.log(this.state.zoom);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <h3 className="App-title">Map Demo</h3>
        </header>
        <div className="flexbox">
            <GMap onZoomChange={this.handleZoomChange}/>
        </div>
        <Slider/>
      </div>
    );
  }
}

export default App;
