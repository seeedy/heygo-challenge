import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './LocationMap.module.css';

const LocationMarker = () => <div className={styles.marker}></div>;

class LocationMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={styles.map}>
        <GoogleMapReact
          className={styles.map}
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationMarker
            lat={this.props.lat}
            lng={this.props.long}
            text={this.props.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default LocationMap;
