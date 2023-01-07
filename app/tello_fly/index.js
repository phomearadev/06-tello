import React from 'react';
import { Pressable, Image, StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

function FlyScreen({ route, navigation }) {

  const { IPAddress} = route.params;
  
  return (
    <View style={{ flex: 1 }}>

      <View style={styles.container1}>
        <Text style={styles.heading1}>IP Connection Working on:</Text>
        <View style={styles.button}>
          <Text style={styles.textbox}>{IPAddress}</Text>
        </View>
      </View> 

      <View style={styles.container2}>
        <View style={styles.control3}>
          <Text style={styles.controltext}> Forward </Text>
        </View>
        <View style={styles.control3}>
          <Text style={styles.controltext}> Backward </Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.control1}>
          <Text style={styles.controltext}> Left </Text>
        </View>
        <View style={styles.control2}>
          <Text style={styles.controltext}> Turn </Text>
          <Text style={styles.controltext}> Left </Text>
        </View>
        <View style={styles.control2}>
          <Text style={styles.controltext}> Turn </Text>
          <Text style={styles.controltext}> Right </Text>
        </View>
        <View style={styles.control1}>
          <Text style={styles.controltext}> Right </Text>
        </View>
      </View>

      <View style={styles.container4}>
      <View style={styles.control3}>
          <Text style={styles.controltext}> Up </Text>
        </View>
        <View style={styles.control3}>
          <Text style={styles.controltext}> Down </Text>
        </View>
      </View>

      <View style={styles.container5}>
        <View style={styles.control4}>
          <Text style={styles.controltext}> Take </Text>
          <Text style={styles.controltext}> Off </Text>
        </View>
        <View style={styles.control4}>
          <Text style={styles.controltext}> Land </Text>
        </View>   
      </View>

      <View style={styles.container6}>
        <Pressable
              onPress={() => 
              navigation.navigate('Home', {
            })}>   
                <View>
                  <View style={styles.button2}>
                  <Text style={styles.button2text}> Return to Home </Text>
                  </View>
                </View>
        </Pressable>
      </View>

    </View>
  );
}

export default FlyScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 3,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    //borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
  },
  container2: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
    paddingTop: 40,
    //borderWidth: 1,
    //borderColor: "brown",
  },
  container3: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    //borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
    paddingLeft: 10,
  },
  container4: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
    //borderWidth: 1,
    //borderColor: "brown",
  },
  container5: {
    flex: 3,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
    paddingTop: 50,
    //borderWidth: 1,
    //borderColor: "brown",
  },
  container6: {
    flex: 2,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
    //borderWidth: 1,
    //borderColor: "brown",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 210,
    marginBottom: 120,
    borderRadius: 8,
    backgroundColor: 'lightgreen',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 210,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: 'grey',
  },
  button2text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button5A: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    marginLeft: 20,
    marginRight: 20,
    //borderRadius: 28,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  textbox: {
    height: 50,
    width: 210,
    paddingTop: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  heading1: {
    flexDirection: "column",
    marginBottom: 10,
    alignItems: "center",
    fontSize: 14,
  },
  spacer: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  control1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 80,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  controltext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  control2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 28,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  control3: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 100,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  control4: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 170,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
    marginTop: 40,
  }
});