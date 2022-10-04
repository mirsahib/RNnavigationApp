import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Network = () => {
  const gotoSaveNetwork=()=>{
    console.log('Network')
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