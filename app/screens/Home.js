import React, { Component } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Dimensions,
  View,
} from 'react-native';
import { Container } from '../components/Container';
import { connect } from 'react-redux';
import { Logo } from '../components/Logo';
import { Button, Input } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  render() {
    console.log('props in home', this.props);
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <View
            style={{ alignItems: 'center', justifyContent: 'space-around' }}
          >
            <Input
              placeholder="Please enter your Username"
              shake={true}
              autocorrect={false}
            />
            <Input
              placeholder="Please Enter your Password"
              shake={true}
              autocorrect={false}
              secureTextEntry={true}
            />
            <Button
              title="Login"
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
            <Button
              title="Login By Facebook"
              titleStyle={{ fontWeight: '800', color: '#FFFFFF', fontSize: 13 }}
              buttonStyle={{
                backgroundColor: '#014A7F',
                width: width / 1.75,
                height: height / 15,
                borderColor: '#371B92',
                borderWidth: 2,
                borderRadius: 25,
              }}
              icon={<FontAwesome name="facebook" size={20} color="white" />}
              iconLeft
              containerStyle={{ marginTop: 20 }}
              onPress={Actions.map}
            />
            <Button
              title="Create An Account"
              titleStyle={{ fontWeight: '900', color: '#000000', fontSize: 17 }}
              buttonStyle={{
                backgroundColor: 'white',
                width: width / 1.75,
                height: height / 15,
                borderColor: '#FFFFFF',
                borderWidth: 0,
                paddingBottom: 20,
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={Actions.map}
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in home', state);
  const beelarr = state.name.name;
  return {
    beelarr,
  };
};

export default connect(mapStateToProps)(Home);
