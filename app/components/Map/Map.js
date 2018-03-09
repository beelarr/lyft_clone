import React, { Component } from 'react';
import { MapView } from 'expo';
import styles from './styles'


class Map extends Component {

	state = {
			latitude: 36.175236,
			longitude: -86.756382,
			error: ''
		};

	componentDidMount() {
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				console.log('position info', position);
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					error: null,
				});
			},
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
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
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					mapType="mutedStandard"
					showsUserLocation={true}
					followsUserLocation={true}
				/>


		);
	}
}

export default Map
