import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import store from './config/store';

import { Map } from './components/Map';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#61D4D5',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#F0F0F0',
  $logoTextColor: '#FFFFFF',
  $darkText: '#343434',
  $loginButtonText: '#371B92',
});

const mapStateToProps = state => ({
  nav: state.nav,
  name: state.name,
});

const AppWithNavigation = connect(mapStateToProps)(Home);

export default () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" initial={true} />
        <Scene key="map" component={Map} title="Choose Service Location" />
      </Scene>
    </Router>
  </Provider>
);
