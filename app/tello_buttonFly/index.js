import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components';
import Button from './components/Button';

import { Pressable, Image, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

const Wrapper = styled.View`
  align-self: center;
  justify-content: center;
  background-color: #000;
  flex: 1;
  width: 100%;
`;

const ButtonFly = props => (
  <Wrapper>
    <Button>Press me</Button>
    <Text></Text>
    <Button>Here</Button>
  </Wrapper>
);

export default ButtonFly;