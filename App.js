/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNav from './src/navigations';
import GlobalProvider from './src/context/reducers/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNav />
    </GlobalProvider>
  );
};

export default App;
