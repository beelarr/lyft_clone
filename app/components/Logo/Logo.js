import React from 'react';
import { Text, ImageBackground } from 'react-native';
import styles from './styles';

const Logo = () => (
  <ImageBackground
    style={styles.containerImage}
    source={require('./images/HP-Hero-BG-trim.jpg')}
  >
    <Text style={styles.text}>Login</Text>
  </ImageBackground>
);

export default Logo;
