import React from 'react';
import { Pressable, Image, StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';


//function FlyScreen({ route, navigation }) {

 
function FlyScreen({ route, navigation }) {

  const { emailAddress} = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.heading1}>IP Connection Working on: {emailAddress}</Text>
      <Text style={styles.spacer} >Drone Controls</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default FlyScreen;

const styles = StyleSheet.create({
  heading1: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    //backgroundColor: "dodgerblue",
    backgroundColor: "green",
    borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
  },
  spacer: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "gold",
    backgroundColor: "white",
    //borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
  },
  
});