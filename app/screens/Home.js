import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "../components/Container";
import { connect } from "react-redux";
import { setName } from "../actions/inital";

class Home extends Component {
  render() {
    return (
      <Container>
        <Text>Hello from {this.props.name.name}</Text>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in home', state);
  const name = state.name;
  return {
    name
  };
};

export default connect(mapStateToProps)(Home);
