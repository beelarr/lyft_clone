import React, { Component } from "react";
import { Text, StatusBar, KeyboardAvoidingView } from "react-native";
import { Container } from "../components/Container";
import { connect } from "react-redux";
import { Logo } from "../components/Logo";



class Home extends Component {
  render() {
    console.log("props in home", this.props);
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in home", state);
  const beelarr = state.name.name;
  return {
    beelarr
  };
};

export default connect(mapStateToProps)(Home);
