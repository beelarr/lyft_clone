import React, { Component } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Dimensions,
  View,
} from 'react-native';
import { Container } from '../components/Container';
import { Services } from '../components/Services';
import { connect } from 'react-redux';
import { bookServices } from '../actions/locations';
import { Actions } from 'react-native-router-flux';


class ServicesScreen extends Component {
  bookHandler = () => {
    const user = {
      userName: 'beelarr',
      firstName: 'Bryon',
      lastName: 'Larrance',
      coordinate: {
        longitude: -86.7265,
        latitude: 36.218,
      },
    };

    this.props.dispatch(bookServices(user));

    const url = 'http://localhost:3000/api/bookings';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => console.log('Error', error))
      .then(response => console.log('Success:', response));
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{ alignItems: 'center', justifyContent: 'space-around' }}
          >
            <Services onPress={this.bookHandler && Actions.map} />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const userName = state.locations.user.userName;
  const firstName = state.locations.user.firstName;
  const lastName = state.locations.user.lastName;
  const coordinates = state.locations.user.coordinate;

  return {
    userName,
    firstName,
    lastName,
    coordinates,
  };
};

export default connect(mapStateToProps)(ServicesScreen);
