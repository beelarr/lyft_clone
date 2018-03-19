import React, { Component } from 'react';
import { MapView } from 'expo';
import styles from './styles';
import { Alert, Platform } from 'react-native';
import {
  getUsersInitialLocation,
  getUsersCustomLocation,
  getNearbyNurses,
} from '../../actions/locations';
import { connect } from 'react-redux';
import nurseCar from '../../assests/carMarker.png';

const { Marker } = MapView;

class Map extends Component {
  componentWillMount() {
    this.watchId = navigator.geolocation.watchPosition(
      position => {
        this.props.dispatch(getUsersInitialLocation(position));
      },
      error => Alert.alert(`Alert ${error.message}`),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      }
    );
  }

  componentDidMount() {
    const url = `http://localhost:3000/api/nurseLocation?longitude=${
      this.props.coordinate.longitude
    }&latitude=${this.props.coordinate.latitude}`;

    fetch(url).then(response =>
      response.json().then(data => {
        setTimeout(() => {
          this.props.dispatch(getNearbyNurses(data));
        }, 2500);
      })
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const markerForAndroid =
      Platform.OS === 'android' ? (
        <Marker coordinate={this.props.coordinate} title="My Location" />
      ) : null;

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
        {markerForAndroid}

        <Marker
          coordinate={{
            latitude: 36.165,
            longitude: -86.769,
          }}
          image={nurseCar}
        />

        {this.props.nearbyNurses.map(marker => {
          <Marker
            key={marker.socketId}
            coordinate={{
              latitude: marker.coordinate.coordinates[1],
              longitude: marker.coordinate.coordinates[0],
            }}
            image={nurseCar}
          />;
        })}
      </MapView>
    );
  }
}

const mapStateToProps = state => {
  const coordinate = state.locations.user.coordinate;
  const nearbyNurses = state.locations.nearbyNurses;
  console.log('Coordinates', coordinate);
  return {
    coordinate,
    nearbyNurses,
  };
};

export default connect(mapStateToProps)(Map);
