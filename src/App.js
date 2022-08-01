import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Loader from './screens/Loader';
import LoginForm from './screens/LoginForm';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
