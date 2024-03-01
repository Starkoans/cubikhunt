import {TouchableOpacity, StyleSheet, Text} from "react-native";
import React from "react";

interface IButton {
    type: "outlined" | "contained" ,
    onPress: () => void ,
    child?: any ,
    text?: string ,
    style?: StyleSheet
}

export const Button = ({type, child, text, style, onPress}:IButton)=>{
    return(
        <TouchableOpacity
            onPress={onPress}
            style={ [type === "outlined"? styles.buttonOutlined : styles.buttonContained, style]} >
            {child}
            {text &&
                <Text style={[type === "outlined"? styles.buttonTextOutlined : styles.buttonTextContained, style]}>
                    {text}
                </Text>}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonOutlined:{
        alignItems:'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#717E96',
        paddingHorizontal: 8,
        paddingVertical: 6,
        color:'blue',
    },
    buttonContained:{
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor:'#282e38',
        paddingHorizontal: 8,
        paddingVertical: 6,
        color:'blue',
    },
    buttonTextOutlined:{
        color:'#717E96',
        fontSize: 16,
    },
    buttonTextContained:{
        color:'white',
        fontSize: 16,
        marginHorizontal:'auto',
    },
})