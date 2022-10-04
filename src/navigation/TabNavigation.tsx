import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../container/HomeScreen/Home';
import Network from '../container/NetworkScreen/Network';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Network' component={Network} />
        </Tab.Navigator>
    )
}

export default TabNavigation