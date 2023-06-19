import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 

const Header = ({Total}) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center', marginTop:24}}>
            <View style={{marginRight:20}}>
                <FontAwesome5 name="mobile-alt" size={24} color="#ffff" />
            </View>
            <View>
              <Text style={[styles.secondary,{fontSize: 20}]}>Product List</Text>
              {Total > 0 &&
                 <Text style={[styles.secondary]}>{Total} Products</Text>
              }
              </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent:'center',
        paddingHorizontal:16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: '#D81A3C',
    },
    primary:{
        color: "#3A4144"
    },
    secondary: {
        color: '#fff'
    }
  });

export default Header