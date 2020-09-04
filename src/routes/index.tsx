import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const { Navigator, Screen } = createStackNavigator();

const Routes:React.FC = () => (
  <Navigator screenOptions={{
    headerShown: false,
    cardStyle: { backgroundColor: "#F8F8F8" },
  }} initialRouteName="Home">
    <Screen name="Home" component={Home} />
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUp" component={SignUp} />
  </Navigator>
)

export default Routes;