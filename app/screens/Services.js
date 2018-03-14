import React, { Component } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Dimensions,
  View,
} from 'react-native';
import { Container } from '../components/Container';
import { Services } from '../components/Services';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  render() {
    console.log('props in home', this.props);
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{ alignItems: 'center', justifyContent: 'space-around' }}
          >
            <Services />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
