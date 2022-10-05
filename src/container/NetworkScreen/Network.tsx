import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type TabNavigationParams={
  Home:any;
  Network: any;
}

const Network = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TabNavigationParams>>()

  const gotoSaveNetwork=()=>{
    const parent = navigation.getParent()
    parent?.navigate('SaveNetwork')
  }
  return (
    <View>
      <Text>Network</Text>
      <Button title='SaveNetwork' onPress={()=>gotoSaveNetwork()}/>
    </View>
  )
}

export default Network

const styles = StyleSheet.create({})