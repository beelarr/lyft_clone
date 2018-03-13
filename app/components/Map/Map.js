import React, { Component } from 'react';
import { MapView } from 'expo';
import styles from './styles';
import {
  getUsersInitialLocation,
  getUsersCustomLocation,
} from '../../actions/locations';
import { connect } from 'react-redux';

const { Marker } = MapView;

class Map extends Component {
  onDragHandler = e => {
    console.log('event on drag', e.coordinate);
    this.props.dispatch(getUsersCustomLocation(e.coordinate));
  };

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      position => {
        console.log('position info', position);
        this.props.dispatch(getUsersInitialLocation(position));
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <MapView
        style={styles.container}
        region={{
          latitude: this.props.coordinate.latitude,
          longitude: this.props.coordinate.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={null}
        mapType="mutedStandard"
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={this.props.coordinate}
          title="My Location"
          description="Drag to an alternate location."
          draggable
          onDragEnd={e => this.onDragHandler(e.nativeEvent)}
        />
      </MapView>
    );
  }
}

const mapStateToProps = state => {
  const coordinate = state.locations.coordinate;

  return {
    coordinate,
  };
};

export default connect(mapStateToProps)(Map);
