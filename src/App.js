import React, { Component } from 'react';
import GMap from './Components/Map.js';
import Slider from './Components/Slider.js';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      zoom: 13, //magic numbers only b/c hardcoded default starting location
      lat: 37.239153, //in prod. could raise up to another wrapping component, create static getters, pass in via props
      diag: 0
    };
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.initZoomChange = this.initZoomChange.bind(this);
    this.updateDiag = this.updateDiag.bind(this);
  }
  
  componentDidMount() {
    this.updateDiag();
    window.addEventListener('resize', this.updateDiag);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDiag);
  }
  
  updateDiag() {
    this.setState({diag: this.pythagorean(window.innerWidth, window.innerHeight)});
  }
  
  pythagorean = (a, b) => {
    return Math.sqrt(a*a + b*b);
  }
  
  handleZoomChange(newZoom, newLat) {
    this.setState({zoom: newZoom, lng: newLat});
  }
  
  initZoomChange(newZoom) {
    this.setState({zoom: newZoom});
  }
  
  render() {
    return (
      <div>
        <div className="flexbox">
            <GMap onZoomChange={this.handleZoomChange} zoom={this.state.zoom}/>
        </div>
        <Slider zoom={this.state.zoom} lat={this.state.lat} 
        onZoomChange={this.initZoomChange} diag={this.state.diag}/>
      </div>
    );
  }
}

export default App;
