import {ProjectLogo} from "./ProjectLogo";
import {Text, View} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import React from "react";

export const ProjectHeader = ({project})=>{
    return(
        <View style={{flexDirection: "row", gap:10}}>
            <ProjectLogo/>
            <View style={{gap:10, justifyContent:"center"}}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>{project.name}</Text>
            </View>
        </View>
    )
}