/**
 * ReactNativeCameraBoilerplate
 * https://github.com/jqn/reactNativeCameraBoilerplate
 * App.js
 */

import React from 'react';
import {StatusBar} from 'react-native';
import RootContainer from './src/containers/RootContainer';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootContainer />
    </>
  );
};

export default App;
