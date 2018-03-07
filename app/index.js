import React from "react";

import EStyleSheet from "react-native-extended-stylesheet";
import { Router } from "react-native-router-flux";
import { Provider, connect } from "react-redux";
import store from './config/store';
import scenes from './config/routes'


import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlue: "#61D4D5",
  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGrey: "#F0F0F0"
});

const App = ({ dispatch, nav }) => (

	<Navigator
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
);

const mapStateToProps = state => ({
	nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(Home);



export default () => (
	<Provider store={store}>
		<Router scenes={scenes} />
	</Provider>
);
