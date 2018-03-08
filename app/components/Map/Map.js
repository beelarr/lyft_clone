import React, { Component } from 'react';
import { MapView } from 'expo';
import styles from './styles'


class Map extends Component {
		state = {
			latitude: null,
			longitude: null
		};

	componentDidMount() {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						error: null,
					});
				},
				(error) => this.setState({ error: error.message }),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
			);
		}

	render() {


		return (
			<MapView
				style={styles.container}
				initialRegion={{
					latitude: this.state.latitude,
					longitude: this.state.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		);
	}
}

export default Map
