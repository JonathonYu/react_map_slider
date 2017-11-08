import React, { Component } from 'react'; 

export default class Slider extends Component {
  
  constructor(props) {
    super(props);
    this.zoomToDistance = this.zoomToDistance.bind(this); //I know arrow functions normally bind this, but currently requires babel workaround and the like
    this.changeZoom = this.changeZoom.bind(this);
  }
  
  /*Converts Google Maps zoom level to km according to google's mercator projection
  see: https://groups.google.com/forum/#!msg/google-maps-js-api-v3/hDRO4oHVSeM/osOYQYXg2oUJ*/
  zoomToDistance = (zoom, lat) => {
    console.log("slider zoom ", zoom, "slider lat ", lat);
    let metersPerPixel =  156543.03392 * Math.cos(lat * Math.PI / 180) / Math.pow(2, zoom); //Mercator scalar
    console.log(metersPerPixel);
    let km = metersPerPixel * this.props.diag / 1000;
    let kmToMiles = 0.621371;
    return Math.round(km * kmToMiles);
  }
  
  changeZoom = (e) => {
    let newZoom = Number(e.target.value);
    this.props.onZoomChange(newZoom);
    console.log("slider changed zoom to: ", newZoom);
  }
  
  render() {
    let maxZoom = 22;
    let minZoom = 4; //default values (these are the normal max/mins rec'd for the api)
    return (
      <div className="slider">
        <div className="distance">
          <h1>{this.zoomToDistance(this.props.zoom, this.props.lat)}mi</h1>
        </div>
        <div className="slider-input">
          <input type='range' value={this.props.zoom} 
          min={minZoom} max={maxZoom}
          onChange={this.changeZoom} />
        </div>
      </div>
    );
  }
}


