import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

export default class GMap extends Component {
  //proptypes and constructor?
  
  static defaultProps = {
    location: [37.239153, -115.814127],
    // zoom: 13,
    key: 'AIzaSyB16KYftwWdZlEHhZoBbc6CprxUhABSv6E'
  };
  
  constructor(props) {
    super(props);
    // this.state = {
    //   zoom: this.props.zoom
    // };
    this.onMapChange = this.onMapChange.bind(this);
    console.log(this.props);
  }
  
  
  onMapChange = ({center, zoom, bounds, marginBounds}) => {
    console.log("child zoom, ", zoom, "child lat, ", center.lat);
    this.props.onZoomChange(zoom, center.lat);
  }
  
  //inline style per flexbox workaround in google-map-react docs
  render() {
    return (
      <GoogleMap
        style={{flex: 1}}
        bootstrapURLKeys={{key: this.props.key}}
        center = {this.props.location}
        zoom = {this.props.zoom}
        onChange ={this.onMapChange}>
      </GoogleMap>
    );
  }
}
