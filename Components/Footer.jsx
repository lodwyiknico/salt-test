import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Footer = ({TotalHarga=0, handleReset, rupiah, handleCheckout}) => {
  return (
    <View style={{borderTopWidth:1, borderColor:"#F1F1F1", paddingHorizontal: 24,paddingVertical:12}}>      
        <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={[styles.primary,{fontSize:18, fontWeight: '700'}]}>Total:</Text>
            <Text style={[styles.primary,{fontSize:18, fontWeight: '700'}]}>{rupiah(TotalHarga)}</Text>
        </View>
        <TouchableOpacity
            onPress={() => handleCheckout()}
            style={{
                marginTop:12,
                backgroundColor: TotalHarga <= 0 ? '#CFCFCF' :styles.primary.color,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 48,
            }}
            disabled={TotalHarga<=0}
        >
            <Text style={{ color: 'white', fontSize: 16, fontWeight:'700' }}>Checkout</Text>
        </TouchableOpacity>
        {TotalHarga > 0 && 
            <TouchableOpacity
                onPress={() => handleReset()}
                style={{
                    marginTop:12,
                    backgroundColor: '#ffff' ,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 48,
                    borderWidth:1,
                    borderColor : styles.primary.color
                }}
            >
                <Text style={{ color: styles.primary.color, fontSize: 16, fontWeight:'700' }}>Reset</Text>
            </TouchableOpacity>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    primary:{
        color: "#3A4144"
    },
    secondary: {
        color: '#fff'
    }
})
export default Footer