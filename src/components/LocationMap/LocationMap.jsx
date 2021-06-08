import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const LocationMarker = ({ text }) => <div>{text}</div>;

class LocationMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationMarker lat={59.955413} lng={30.337844} text='My Marker' />
        </GoogleMapReact>
      </div>
    );
  }
}

export default LocationMap;
