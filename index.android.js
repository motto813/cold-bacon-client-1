import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameStart from './containers/GameStart';
import LaunchScreen from './containers/LaunchScreen';
import GameplayScreen from './containers/GameplayScreen';

const Nav = StackNavigator({
  LaunchScreen: {screen: LaunchScreen },
  GameStart: {screen: GameStart },
  GameplayScreen: {
    path: 'games/:game_id/:traceable_id/:traceable_type',
    screen: GameplayScreen},
  }, {
    headerMode: 'none'
  }
);

AppRegistry.registerComponent('client', () => Nav);
