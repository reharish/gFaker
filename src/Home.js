import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';



export default function GPSNavigator() {
    const [Latitude, setLatitude] = useState('');
    const [Longitude, setLongitude] = useState('');

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }
        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      };
    

  return (
            <View style={styles.container}>
              <TextInput
                value={Latitude}
                onChangeText={(Latitude) => setLatitude(Latitude)}
                placeholder={coordinates.latitude}
                style={styles.input}
              />
              <TextInput
                value={Longitude}
                onChangeText={(Longitude) => setLongitude(Longitude)}
                placeholder={coordinates.longitude}
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Button onPress={getCurrentLocation} title="Set Location" />
                {coords && (
                    <Text>
                        Hello
                    </Text>
                )}
              </View>
              <StatusBar style="auto" />
            </View>
          )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  buttonContainer: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  }
});
