/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import Constants from 'react-native-layout-constants';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      {/* <Home /> */}
      <Search />
    </View>
  );
}
