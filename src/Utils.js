import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';
import * as Location from 'expo-location';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const [Latitude, setLatitude] = useState('');
const [Longitude, setLongitude] = useState('');
const [coords, setLocation] = useState('');

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }
    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);
  };


  const setMockLocationAsync = async (latitude, longitude) => {
    return;
  };

  const onSetLocationPress = async () => {
    if (isNaN(parseFloat(Latitude)) || isNaN(parseFloat(Longitude))) {
      Alert.alert('Enter Valid Co-ordinates');
    }
    else {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }

        const location = {
          latitude: parseFloat(Latitude),
          longitude: parseFloat(Longitude)
        };


        await setMockLocationAsync(Latitude, Longitude);


        Alert.alert(title = "Success!", `${JSON.stringify(location)}`);

      } catch (e) {
        Alert.alert(title = "Failed to set Location", `${e}`);
      }

    }
  };

  var coordinates =  getCurrentLocation();