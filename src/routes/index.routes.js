import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home/index.screen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  }
}, 
{
  initialRouteName: 'Home'
});

const Routes = createAppContainer(MainNavigator);

export default Routes;