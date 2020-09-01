import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, TextBase } from 'react-native';

const Home:React.FC = () => {
  const navigation = useNavigation();

  return(
    <View>
      <Text>Home</Text>
      <Button title="dada" onPress={() => navigation.navigate('SignIn')}><Text>dawdaw</Text></Button>
    </View>
  )
}

export default Home;