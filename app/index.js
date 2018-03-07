import React from "react";

import EStyleSheet from "react-native-extended-stylesheet";
import { Router } from "react-native-router-flux";
import { Provider } from "react-redux";
import store from './config/store';


import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlue: "#61D4D5",
  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGrey: "#F0F0F0"
});
export default () => (
	<Provider store={store}>
		<Router scenes={scenes} />
	</Provider>
);
