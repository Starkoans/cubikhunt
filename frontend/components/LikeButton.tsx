import {Text} from 'react-native'
import * as IconsOutlined from "react-native-heroicons/outline";
import * as IconsSolid from "react-native-heroicons/solid";
import {Button} from "./Button";
import React, {useEffect, useState} from "react";
import {Project} from "../types";
import {projectsService} from "../services/projects.service";

export const LikeButton = ({project} : Project) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(project.likes_count) //select from db
    useEffect(()=>{
        projectsService.getProjectLikeStatus(project.id)
            .then(res => {
                if (res) setIsLiked(true)})
    },[]);

    const handleLike = () => {
        setIsLiked(prevState => !prevState)
        if(!isLiked){
            setLikesCount(prevState => +prevState + 1);
            projectsService.likeProject(project.id).then(
                // r => console.log(r)
            )
        }
        else {
            setLikesCount(prevState => +prevState - 1);
            projectsService.unlikeProject(project.id).then(
                // r => console.log(r)
            )
        }
    }
    useEffect(()=>{console.log(project.likes_count)},[likesCount])
  return(
      <Button type="outlined"
              onPress={handleLike}
              child={[
                  <Text>{likesCount}</Text>,
                  isLiked?  <IconsSolid.HeartIcon size={25} color={"#e11818"}/>
                  : <IconsOutlined.HeartIcon size={25} color={"#717E96"}/>]}
              style={{flexDirection:'row', gap:5}}
      />
  )
}