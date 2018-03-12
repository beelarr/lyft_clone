import React from 'react';
import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LoginButton = () => (
  <Button
    title="Login"
    titleStyle={{ fontWeight: '900', color: '#371B92' }}
    buttonStyle={{
      backgroundColor: 'white',
      width: width / 1.75,
      height: height / 15,
      borderColor: '#371B92',
      borderWidth: 2,
      borderRadius: 20,
    }}
    containerStyle={{ marginTop: 20 }}
  />
);
