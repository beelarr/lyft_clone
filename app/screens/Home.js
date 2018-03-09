import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "../components/Container";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  render() {
    console.log("props in home", this.props);
    return (
      <Container>
        <Text>IVASAP</Text>
        <Text onPress={Actions.map}>Go to Map</Text>
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
