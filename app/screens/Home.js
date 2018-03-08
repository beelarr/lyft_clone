import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "../components/Container";
import { connect } from "react-redux";
import { Map } from "../components/Map"

class Home extends Component {
  render() {
  console.log('props in home', this.props);
    return (
      <Map/>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in home', state);
  const beelarr = state.name.name;
  return {
    beelarr
  };
};

export default connect(mapStateToProps)(Home);
