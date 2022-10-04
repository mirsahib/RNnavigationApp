import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../container/HomeScreen/Home';
import Edit from '../container/HomeScreen/Edit';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const HomeNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{display:'none'}}}>
      <Tab.Screen name='HomeScreen' component={Home} />
      <Tab.Screen name='EditScreen' component={Edit}/>
    </Tab.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})