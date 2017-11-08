import React, { Component } from 'react';
import GMap from './Components/Map.js';
import Slider from './Components/Slider.js';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      zoom: 13, //placeholder, should propagate up value from map.js
      lat: 37.239153 //likewise
    };
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.initZoomChange = this.initZoomChange.bind(this);
  }
  
  handleZoomChange(newZoom, newLat) {
    this.setState({zoom: newZoom, lng: newLat});
    console.log(this.state.zoom, this.state.lat);
  }
  
  initZoomChange(newZoom) {
    this.setState({zoom: newZoom});
    console.log("slider zoomed to: ", newZoom);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <h3 className="App-title">Map Demo</h3>
        </header>
        <div className="flexbox">
            <GMap onZoomChange={this.handleZoomChange} zoom={this.state.zoom}/>
        </div>
        <Slider zoom={this.state.zoom} lat={this.state.lat} 
        onZoomChange={this.initZoomChange}/>
      </div>
    );
  }
}

export default App;
