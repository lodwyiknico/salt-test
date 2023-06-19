import { View, Text, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const PopUp = ({modalVisible, handleClose, Data, TotalHarga, rupiah}) => {
  return (
    <View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Success!</Text>
            <View style={{padding:24}}>
                <Text style={{textAlign:'center', marginBottom: 15}}>
                    You have successfully purchase {Data.filter(e=> e.qty > 0).length} products with total of {rupiah(TotalHarga)}. Click close to buy another modems
                </Text>
                <TouchableOpacity
                    onPress={() => handleClose()}
                    style={{
                        marginTop:12,
                        backgroundColor: '#3A4144',
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 48,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight:'700' }}>Close</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      fontSize: 20, 
      fontWeight:'700',
      marginBottom: 15,
      textAlign: 'center',
      color: '#262627'
    },
  });
export default PopUp