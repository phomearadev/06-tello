import React from 'react';
import { Pressable, Image, StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';


//function FlyScreen({ route, navigation }) {

 
function FlyScreen({ route, navigation }) {

  const { IPAddress} = route.params;
  
  return (
    <View style={{ flex: 1 }}>
    <View style={styles.container1}>
      <Text style={styles.heading1}>IP Connection Working on:</Text>
      <Text style={styles.box}>{IPAddress}</Text>
    </View>  
    <View style={styles.container2}>
      <Text style={styles.spacer} >Drone Controls</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.container3}>
      </View>
      <View style={styles.container4}>
      </View>
      <View style={styles.container5}>
      </View>
    </View>
  );
}

export default FlyScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    //marginTop: 20,
    backgroundColor: "white",
    //justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "brown",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingHorizontal: 35,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "brown",
    alignItems: "center",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "brown",
    alignItems: "center",
  },
  container4: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingHorizontal: 35,
    //paddingTop: 25,
    //paddingBottom: 45,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "brown",
    alignItems: "center",
  },
  container5: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingHorizontal: 35,
    //paddingTop: 25,
    //paddingBottom: 45,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "brown",
    alignItems: "center",
  },
  box: {
    //flex: 1,
    //marginTop: 10,
    //marginBottom: 40,
    height: 50,
    width: 210,
    paddingTop: 10,
    //margin: 10,
    backgroundColor: "lightgreen",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  heading1: {
    //flex: 1,
    flexDirection: "column",
    marginBottom: 10,
    //paddingTop: 40,
    //backgroundColor: "dodgerblue",
    //backgroundColor: "green",
    //borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  spacer: {
    //flex: 1,
    flexDirection: "column",
    //backgroundColor: "gold",
    backgroundColor: "white",
    //borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
  },
  
});