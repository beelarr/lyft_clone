import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import styles from "./styles";
import { Actions } from "react-native-router-flux";

export default class Logo extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.containerImage}
        source={require("./images/HP-Hero-BG-trim.jpg")}
      >
        <Text style={styles.text} onPress={Actions.map}>
          Login
        </Text>
      </ImageBackground>
    );
  }
}
