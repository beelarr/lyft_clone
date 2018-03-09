import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import styles from "./styles";



export default class Logo extends Component {
	render() {
		return (
					<ImageBackground
						style={styles.containerImage}
						source={require('./images/HP-Hero-BG-trim.jpg')}>
							<Text style={styles.text}>Login </Text>
					</ImageBackground>
		)
	}

};
