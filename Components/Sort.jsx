import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker';

const Sort = ({sort, handleSort}) => {
    const [open, setOpen] = useState(false);
    const items = [
        { label: 'Highest Price', value: 1 },
        { label: 'Lower Price', value: 2 },
        { label: 'Name', value: 3 },
    ];
  return (
    <View style={{paddingHorizontal: 24,paddingVertical:12, borderBottomWidth:1, borderColor:'#F1F1F1'}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name="sort-variant" style={{marginRight:6}} size={24} color="black" />
                <Text style={{fontSize:16}}>Sort By: </Text>
            </View>
            <View style={{zIndex:999}}>
                <DropDownPicker
                    items={items}
                    open={open}
                    value={sort.value}
                    setOpen={setOpen}
                    style={{ width: 130, backgroundColor: '#F0F0F0', }}
                    dropDownContainerStyle={{
                        backgroundColor:'#FFFFFF', 
                        borderColor:'#FFFFFF', 
                        marginTop:6, 
                        borderRadius:20,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}
                    placeholder='Default'
                    zIndex={3000}
                    zIndexInverse={3000}
                    onSelectItem={e=> handleSort(e)}
                />
            </View>
        </View>
    </View>
  )
}

export default Sort