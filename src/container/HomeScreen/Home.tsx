import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type TabNavigationParams={
  Home:any;
  Network: any;
}

const Home = () => {
  const navigation =useNavigation<NativeStackNavigationProp<TabNavigationParams>>()
  const gotoEdit=()=>{
    const parent = navigation.getParent()
    parent?.navigate('Edit')
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title='Edit' onPress={()=>gotoEdit()}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})