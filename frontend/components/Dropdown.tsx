import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import {useState} from "react";

export const Dropdown = ({valueArr= [], selectedValue, defaultValue, handler}) => {
    const [dropdownShown, setDropdownShown] = useState(false);
    const [selected, setSelected] = useState(defaultValue)
    const handleSelect = (value) => {
        handler(value)
        setSelected(value)
        setDropdownShown(false)

    }

    const handleDropdownPress = () => {
        setDropdownShown(prevState => !prevState)
    }

    return(
        <View>
            <TouchableOpacity
                style={styles.select}
                onPress={handleDropdownPress}
            >
                <Text style={{color:'white', fontSize:16}}>
                    {selected? selected:'Смотреть все категории'}
                </Text>
                <Icons.ChevronDownIcon size={35} color='white'/>
            </TouchableOpacity>
            <View style={{marginTop:5}}>
                {dropdownShown &&
                    valueArr.map((value, i)=>{
                        return(
                            <TouchableOpacity
                                key={i}
                                onPress={()=>handleSelect(value)}
                                style={i == 0? [styles.dropdownItem, styles.dropdownFirstItem] : i == valueArr.length-1?  [ styles.dropdownItem, styles.dropdownLastItem] : styles.dropdownItem }>
                                <Text style={{fontSize:16}}>{value}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems:'flex-end',
        padding:15,

    },
    select:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'gray',
        width:300,
        paddingVertical:5,
        borderRadius:5
    },
    dropdownItem:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'pink',
        width:300,
        paddingVertical:10,
        fontSize:16,
        borderBottomWidth:1,
        borderColor:'#d07398'
    },
    dropdownFirstItem:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    dropdownLastItem:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderBottomWidth:0
    }

})