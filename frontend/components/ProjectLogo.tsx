import * as Icons from "react-native-heroicons/outline";
import {View} from "react-native";
import React from "react";

export const ProjectLogo = ()=>{
    return(
        <View style={{width:66, height:66, borderRadius:5, backgroundColor:"#9aa2ab", justifyContent:"center", alignItems:"center"}}>
            <Icons.UserGroupIcon size={40} color={"#717E96"} />
        </View>
    )
}