import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './config/store';

import Map from './screens/Map';
import Home from './screens/Login';
import Services from './screens/Services';

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

export default () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Login" initial={true} />
        <Scene key="map" component={Map} title="Available Nurses" />
        <Scene key="services" component={Services} title="Services" />
      </Scene>
    </Router>
  </Provider>
);
