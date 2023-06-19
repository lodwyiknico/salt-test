import { View, Text, FlatList, StyleSheet, Button, } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';

const Item = ({title, item, increment, decrement, rupiah}) => (
    <View style={styles.item}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View  style={{ flex: 1}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{rupiah(item.price)}</Text>
            </View>
            <View style={{backgroundColor:'#F0F0F0', padding:5, flexDirection:'row', alignItems:"center"}}>
                <Button
                    onPress={()=>decrement(item)}
                    title="-"
                    color="#3A4144"
                    disabled ={item.qty === 0}
                />
                <Text style={{color:'#262627', fontSize:20, fontWeight:'700', marginHorizontal:24}}>{item.qty}</Text>
                <Button
                    onPress={()=> increment(item)}
                    title="+"
                    color="#3A4144"
                    disabled={item.qty === item.stock}
                />
            </View>
        </View>
    </View>
  );

const Modem = ({Data, increment, decrement, rupiah}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({item}) => <Item title={item.title} item={item} increment={increment} decrement={decrement} rupiah={rupiah}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        flex:1,
        zIndex:-1,
    },
    item: {
        padding:12,
    },
    title:{
     fontSize: 16,
     fontWeight: 700,   
     color:'#3A4144'
    },
    price:{
        color:'#7D8285',
        fontSize:14
    }
})
export default Modem