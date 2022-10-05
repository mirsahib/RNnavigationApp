import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootNavigationParams } from '../../navigation'
const Edit = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootNavigationParams>>()
  const nav = () => {
    navigation.navigate('SaveNetwork')
  }
  
  return (
    <View>
      <Text>Edit</Text>
      <Button title="Go to save network" onPress={()=>nav()}/>
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({})