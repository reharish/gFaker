import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/Home';
import GPSNavigator from './src/Navigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab One" component={MainScreen} />
        <Tab.Screen name="Navigator" component={GPSNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}