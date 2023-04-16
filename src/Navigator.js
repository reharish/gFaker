import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

export default function GPSNavigator() {
  const [fileContents, setFileContents] = useState('');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      const fileUri = result.uri;
      const fileContents = await RNFS.readFile(fileUri, 'utf8');
      setFileContents(fileContents);
      Alert.alert('File uploaded');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        Alert.alert('Failed to Upload file');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload a CSV File</Text>
      <Button title="Select File" onPress={pickDocument} />
      {fileContents !== '' && (
        <View style={styles.fileContainer}>
          <Text style={styles.fileContents}>{fileContents}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fileContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  fileContents: {
    fontSize: 16,
  },
});