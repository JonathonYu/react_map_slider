import React, { Component } from 'react'; 

export default class Slider extends Component {
  
  constructor(props) {
    super(props);
    this.zoomToDistance = this.zoomToDistance.bind(this); //wanted an arrow function but weirdness with linter
    //https://stackoverflow.com/questions/44080928/is-it-possible-to-use-arrow-functions-in-classes-with-es6
    this.changeZoom = this.changeZoom.bind(this);
  }
  
  /*Converts Google Maps zoom level to km according to google's mercator projection
  see: https://groups.google.com/forum/#!msg/google-maps-js-api-v3/hDRO4oHVSeM/osOYQYXg2oUJ*/
  zoomToDistance = (zoom, lat) => {
    console.log("slider zoom ", zoom, "slider lat ", lat);
    let metersPerPixel =  156543.03392 * Math.cos(lat * Math.PI / 180) / Math.pow(2, zoom); //Mercator scalar
    console.log(metersPerPixel);
    let km = metersPerPixel * 1920 /*TODO: viewportDiag*/ / 1000;
    return Math.round(km); //TODO: want 2 decimal precision but js decimal rounding is weird
  }
  
  changeZoom = (e) => {
    let newZoom = Number(e.target.value);
    this.props.onZoomChange(newZoom);
    console.log("slider changed zoom to: ", newZoom);
  }
  
  render() {
    let maxZoom = 22;
    let minZoom = 4; //placeholder default values (these are the normal max/mins rec'd for the api)
    return (
      <div className="slider">
        <div className="distance">
          <h1>{this.zoomToDistance(this.props.zoom, this.props.lat)}km</h1>
        </div>
        <div>
          <input type='range' value={this.props.zoom} 
          min={minZoom} max={maxZoom}
          onChange={this.changeZoom}/>
        </div>
      </div>
    );
  }
}


