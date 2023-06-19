import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 

const Loader = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <FontAwesome5 name="mobile-alt" size={44} color="#3A4144" />
      <Text style={{fontSize: 20, fontWeight:'700', color:'#3A4144', marginTop:24}}>Loading Product Data</Text>
      <Text style={{fontSize: 16, fontWeight:'700', color:'#7D8285'}}>Please wait...</Text>
    </View>
  )
}

export default Loader