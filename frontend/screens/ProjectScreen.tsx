import {View, Text, TouchableOpacity, StyleSheet, Pressable, SafeAreaView} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import {useNavigation, useNavigationState} from "@react-navigation/native";
import {Project} from "../types";
import {Header} from "../components/Header";
import {Button} from "../components/Button";
import {ProjectLogo} from "../components/ProjectLogo";
import React from "react";
import {ProjectProgress} from "../components/ProjectProgress";

export const ProjectScreen = ({route}) => {
    const navigation = useNavigation();
    const project : Project = route.params;

  return(
          <SafeAreaView>
              <Header icon="back"/>
              <View style={styles.projectProfile}>
                  <View style={{flexDirection: "row", gap:10}}>
                      <ProjectLogo/>
                      <View>
                          <Text style={styles.tittle}>{project.name}</Text>
                          <View style={{flexDirection: "row", alignItems:"center"}}>
                              <Icons.HeartIcon size={20} color={"#717E96"}/>
                              <Text>227</Text>
                          </View>
                      </View>
                  </View>
                  <ProjectProgress is_collects={ new Date(project.end_date) < new Date()} collected={3000} target={100000}/>
                  { new Date(project.end_date) < new Date()? <Button type="contained" text="Поддержать"/>: null}
              </View>
              <Pressable
                  style={styles.detailsMenu}><Text>Дорожная карта</Text></Pressable>
              <Pressable style={styles.detailsMenu}><Text>Участники</Text></Pressable>
              <Pressable style={styles.detailsMenu}><Text>Спонсоры</Text></Pressable>
              <Pressable
                  onPress={()=>{navigation.navigate("Comments")}}
                  style={styles.detailsMenu}><Text>Комментарии</Text></Pressable>
          </SafeAreaView>

  )
}
const styles = StyleSheet.create({
    projectProfile:{
        padding:10,
        borderBottomWidth:2,
        gap:10
    },
    tittle:{
        fontSize:20,
        fontWeight: "600"
    },
    detailsMenu:{
        padding:10,
        borderBottomWidth:2,
        fontSize:16
    }
})