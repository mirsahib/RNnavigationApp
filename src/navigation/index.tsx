import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavContainer from '../navigation/HomeNavigation'
import NetworkNavContainer from '../navigation/NetworkNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Edit from '../container/HomeScreen/Edit';
import AddNetwork from '../container/NetworkScreen/AddNetwork';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const index = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tab" options={{headerShown:false}} component={TabNavigation} />
          <Stack.Screen name="Edit" options={{headerShown:false}} component={Edit}/>
          <Stack.Screen name="SaveNetwork" options={{headerShown:false}} component={AddNetwork}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({})