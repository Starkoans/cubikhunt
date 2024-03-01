import {StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import React from "react";

interface IHeader{
    icon: "close" | "back"
}

export const Header = ({icon}:IHeader)=>{
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
            <TouchableOpacity
                onPress={()=> {navigation.goBack()}}>
                {icon == "back"?
                    <Icons.ArrowLeftIcon size={35} color='blue'/> :
                    <Icons.XMarkIcon size={35} color='blue'/>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems:'flex-end',
        padding:15,
    }
})