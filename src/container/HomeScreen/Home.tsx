import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  const gotoEdit=()=>{
    console.log('edit')
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