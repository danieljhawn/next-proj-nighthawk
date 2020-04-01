import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: '#495c7a',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.316659,
      lng: -97.704271
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ 
        height: '50vh', 
        width: '30%',    
        margin: 'auto',
        justifyContent: 'center',

        }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.316659}
            lng={-97.704271}
            text="We're Here!"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
