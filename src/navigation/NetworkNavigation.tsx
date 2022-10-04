import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Network from '../container/NetworkScreen/Network';
import AddNetwork from '../container/NetworkScreen/AddNetwork';

const Tab = createBottomTabNavigator();


const NetworkNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{display:'none'}}}>
      <Tab.Screen name='NetworkScreen' component={Network} />
      <Tab.Screen name='AddNetworkScreen' component={AddNetwork}/>
    </Tab.Navigator>
  )
}

export default NetworkNavigation

const styles = StyleSheet.create({})