import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import Home from "../screens/Home";

const scenes = Actions.create(
  <Scene key="index">
    <Scene key="home" component={Home} title="home" initial />
  </Scene>
);

export default scenes;

