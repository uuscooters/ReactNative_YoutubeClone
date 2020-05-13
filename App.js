/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Constants from 'react-native-layout-constants';
import {Icon, withTheme} from 'react-native-elements';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import {reducer} from './src/reducers/reducer';

const customeDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
  },
};

const customeDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
  },
};

const store = createStore(reducer);
const Stact = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const {colors} = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return (
            <Icon name={iconName} size={32} color={color} type="material" />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'gray',
        labelStyle: {marginBottom: 15},
        style: {
          borderTopWidth: 10,
          height: '10%',
          borderTopColor: 'transparent',
        },
      }}>
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customeDarkTheme}>
        <Stact.Navigator headerMode="none">
          <Stact.Screen name="rootHome" component={RootHome} />
          <Stact.Screen name="search" component={Search} />
          <Stact.Screen name="videoPlayer" component={VideoPlayer} />
        </Stact.Navigator>
      </NavigationContainer>
    </Provider>
    // <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
    //   {/* <Home /> */}
    //   <Search />
    // </View>
  );
}
