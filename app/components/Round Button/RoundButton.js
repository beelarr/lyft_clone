import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const button = props => (
  <Button
    onPress={props.onPress}
    title="Services"
    buttonStyle={styles.button}
    titleStyle={styles.btnText}
    containerStyle={styles.buttonContainer}
  />
);

export default button;
