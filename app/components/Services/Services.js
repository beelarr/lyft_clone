import React from 'react';
import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

const Services = () => (
  <Button
    title="Services"
    titleStyle={{ fontWeight: '900', color: '#371B92' }}
    buttonStyle={{
      backgroundColor: 'white',
      width: width / 1.75,
      height: height / 15,
      borderColor: '#371B92',
      borderWidth: 2,
      borderRadius: 25,
    }}
    containerStyle={{ marginTop: 20 }}
    onPress={Actions.map}
  />
);

export default Services;
