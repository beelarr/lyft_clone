import React, { Component } from 'react';
import { MapView } from 'expo';
import styles from './styles';
import { Alert, Platform } from 'react-native';
import {
  getUsersInitialLocation,
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
    const url = `http://10.0.1.13:3000/api/nurseLocation?longitude=
    ${this.props.coordinate.longitude}&latitude=${
      this.props.coordinate.latitude
    }`;

    fetch(url).then(response =>
      response
        .json()
        .then(data => {
          setTimeout(() => {
            this.props.dispatch(getNearbyNurses(data));
          }, 2500);
        })
        .catch(err => {
          Alert.alert(`Error fetching nurses: ${err.message}`);
          console.log(
            `Error fetching nurses. Might be related to: ${err.message}`
          );
        })
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
        {Platform.OS === 'android' && (
          <Marker coordinate={this.props.coordinate} title="My Location" />
        )}

        {this.props.nearbyNurses.map(nurse => (
          <Marker
            key={nurse._id}
            coordinate={{
              latitude: nurse.coordinate.coordinates[1],
              longitude: nurse.coordinate.coordinates[0],
            }}
            image={nurseCar}
          />
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = state => {
  const coordinate = state.locations.user.coordinate;
  const nearbyNurses = state.locations.nearbyNurses;
  console.log('Nearby Nurses', nearbyNurses);
  return {
    coordinate,
    nearbyNurses,
  };
};

export default connect(mapStateToProps)(Map);
