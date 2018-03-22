import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const RoundButton = props => (
  <Button
    onPress={props.onPress}
    title="Services"
    buttonStyle={styles.button}
    titleStyle={styles.btnText}
    containerStyle={styles.buttonContainer}
    borderRadius={styles.buttonContainer.borderRadius}
  />
);

export default RoundButton;
