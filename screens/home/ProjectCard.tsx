import {Project} from "../../types";
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import {Button} from "../../components/Button";
import {ProjectLogo} from "../../components/ProjectLogo";
import {ProjectProgress} from "../../components/ProjectProgress";
import {LikeButton} from "../../components/LikeButton";
import {ProjectHeader} from "../../components/ProjectHeader";

interface IProjectCard {
    project : Project,
    isCollects: boolean
}
const ProjectCard  = (prop : IProjectCard)=>{
    const navigation = useNavigation();

    return(
        <Pressable
            onPress={()=> {
                navigation.navigate("Project", prop.project)
            }}
            key ={prop.project.id}>
            <View style={styles.card}>
                <ProjectHeader project={prop.project}/>
                <Text>{prop.project.description}</Text>
                <ProjectProgress is_collects={prop.isCollects} collected={3000} target={prop.project.target_amount}/>
                <View style={{flexDirection: "row", gap:10}}>
                    <LikeButton project={prop.project}/>
                    {prop.isCollects? <Button type="contained" text="Поддержать"/> : null}
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:5,
        gap:10,
        borderWidth:1,
        borderColor:'#717E96',
        padding:10,
        margin:5
    },
    cardTitle:{
        fontSize:16,
    },
})

export {ProjectCard}