import React from 'react';
import { View, StatusBar } from 'react-native';

const App:React.FC = () => (
  <>
    <StatusBar barStyle={"dark-content"} backgroundColor="#F8F8F8" />
    <View style={{ flex: 1, backgroundColor: '#F8F8F8' }} />
  </>
)

export default App;