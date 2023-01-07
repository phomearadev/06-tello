import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

import HomeScreen from './app/tello_home';
import FlyScreen from './app/tello_fly';
import CommandScreen from './app/tello_command';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fly" component={FlyScreen} />
        <Stack.Screen name="Command" component={CommandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

// End