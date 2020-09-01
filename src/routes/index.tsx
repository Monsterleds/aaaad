import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

const Routes:React.FC = () => (
  <Navigator screenOptions={{
    headerShown: false,
    cardStyle: { backgroundColor: "#F8F8F8" },
  }} initialRouteName="SignIn">
    <Screen name="Home" component={Home} />
    <Screen name="SignIn" component={SignIn} />
  </Navigator>
)

export default Routes;