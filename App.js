import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';
import * as Location from 'expo-location';


export default function App() {
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

  return (
    <View style={styles.container}>
      <Text>Enter the Co-ordinates</Text>
      <TextInput
        value={Latitude}
        onChangeText={(Latitude) => setLatitude(Latitude)}
        placeholder="Latitude"
        style={styles.input}

      />
      <TextInput
        value={Longitude}
        onChangeText={(Longitude) => setLongitude(Longitude)}
        placeholder="Longitude"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onSetLocationPress} title="Set Location" />
        <Button title="Get Current Location" onPress={getCurrentLocation} style={styles.buttonContainer} />

        {coords && (
          <Text>
            Latitude: {coords.latitude}, Longitude: {coords.longitude}
          </Text>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

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
  },
});
