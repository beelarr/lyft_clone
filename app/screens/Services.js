import React, { Component } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Container } from '../components/Container';
import { Services } from '../components/Services';
import { connect } from 'react-redux';
import { bookServices } from '../actions/locations';
import { Actions } from 'react-native-router-flux';

class ServicesScreen extends Component {
  bookHandler = () => {
    // Example until Login is built.
    const user = {
      userName: 'beelarr',
      firstName: 'Bryon',
      lastName: 'Larrance',
      coordinate: {
        longitude: -86.7265,
        latitude: 36.218,
      },
    };
    // For dev - When Services is clicked I am booking that service in the db
    this.props.dispatch(bookServices(user));

    const url = 'http://10.0.1.13:3000/api/bookings';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => console.log('Error', error))
      .then(response => {
        console.log('Success:', response);
        Alert.alert(
          'Service Booked!',
          'Click OK to track your nurse.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                Actions.popTo('map');
                console.log('OK Pressed');
              },
            },
          ],
          { cancelable: false }
        );
      });
  };

  render() {
    return (
      <Container>
        <StatusBar hidden={true} barStyle="light-content" />
        <Services onPress={this.bookHandler} />
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
