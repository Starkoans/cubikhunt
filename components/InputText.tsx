import {Text, TextInput, View, StyleSheet} from "react-native";
import React from "react";

export const InputText = ({label, value, placeholder, handleInput, multiline= false, numberOfLines= 1, keyboardType}) =>{
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.input, {height: 40*numberOfLines}]}>
                <TextInput
                    multiline = {multiline}
                    numberOfLines = {numberOfLines}
                    keyboardType={keyboardType}
                    onChangeText={handleInput}
                    value={value}
                    placeholder={placeholder}/>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    label:{
        color:"gray"
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        padding:10
    }
})