import {Text, View, StyleSheet} from "react-native";
import React from "react";

export const ProjectProgress = ({is_collects, target, collected})=>{
    const progfill = ((collected/target) * 100 > 100) ? 100 :
        ((collected/target) * 100 > 5) ?
            ((collected/target) * 100) : 5
    return(
        <View style={{gap:5}}>
            <Text>{is_collects? "Собирает":"Завершен"}</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progressBarFill, {width:`${progfill}%`}]}/>
            </View>
            <Text>{collected} ({Math.round((collected/target) * 100)}%) из {target}</Text>

        </View>
    )
}
const styles =StyleSheet.create({
    progressBar:{
        height: 15,
        borderRadius:5,
        backgroundColor:'#b4c3e0'
    },
    progressBarFill:{
        height: 15,
        borderRadius:5,
        backgroundColor:'#004bd0'
    }
})