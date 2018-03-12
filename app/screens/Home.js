import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { connect } from 'react-redux';
import { Logo } from '../components/Logo';
import { LoginButton } from '../components/Button/Button';

class Home extends Component {
  render() {
    console.log('props in home', this.props);
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <LoginButton />
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
