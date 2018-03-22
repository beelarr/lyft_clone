import React, { Component } from 'react';
import { Map } from '../components/Map';
import { View } from 'react-native';
import { RoundButton } from '../components/Round Button';
import { Actions } from 'react-native-router-flux';

class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Map />
        <RoundButton onPress={Actions.services} />
      </View>
    );
  }
}

export default MapScreen;
