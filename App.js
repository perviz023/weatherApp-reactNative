import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import LoadingPage from './LoadingPage';
import React from 'react';

const API_KEY = '9dc7229bd9e553de2d6cca0b5a66afb1'

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getLocation = async () => {

    try {

      const response = await Location.requestForegroundPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });


    } catch (error) {
      Alert.alert('Не получается определить локацию', "Error");
    }

  }

  componentDidMount() {
    this.getLocation();
  }




  render() {
    return (
      this.state.isLoading ? <LoadingPage /> : null
    );
  }
}

