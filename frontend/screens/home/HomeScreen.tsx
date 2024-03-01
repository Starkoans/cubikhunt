import {
    ScrollView,
    SafeAreaView,
    View,
    Text, RefreshControl, FlatList
} from "react-native";
import {Searchbar} from "./Searchbar";
import React, {useEffect, useState} from "react";
import {projectsService} from '../../services/projects.service'
import {ProjectCard} from "./ProjectCard";
import {Project} from "../../types";

export const HomeScreen = () => {
    const [projects, setProjects] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const updateProjects = () => {
        setRefreshing(true)
        projectsService.getAllProjects(undefined, undefined)
            .then(data => {
                // console.log(data);
                data && setProjects(data);
                setRefreshing(false)
            })
            .catch(error => {
                // console.log(error);
                setProjects(error.message)
            });
    }
    useEffect( ()=>{
        updateProjects()
    },[])


    return(
        <SafeAreaView>
            <Searchbar/>
            <FlatList data = {projects}
                      refreshControl={
                          <RefreshControl refreshing={refreshing} onRefresh={updateProjects} />
                      }
                      contentContainerStyle={{margin:15}}
                      keyExtractor = {(project) => project.id}
                      renderItem = {({item}) => {
                          const currDate = new Date();
                          const endProjDate = new Date(item.end_date);
                          return (
                              <ProjectCard project={item} isCollects={currDate < endProjDate}/>
                          );
                      }}
            />
        </SafeAreaView>


    )
}
