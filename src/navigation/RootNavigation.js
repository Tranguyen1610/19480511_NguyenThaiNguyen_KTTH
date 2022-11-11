import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WellcomeScreen from '../screens/WellcomeScreen';
import DetailScreen from '../screens/DetailScreen';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="WellcomeScreen" component={WellcomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})