import axios from "axios";
import {Project} from "../types";
const URL = 'http://172.20.10.3:3001/api/projects'

const headers = {
    'Content-Type': 'application/json',
    "Origin": 'http://localhost:19006',
};

export const projectsService =  {
    async getAllProjects(name?:string, isCollects?: boolean ):Promise<Project[]>{
        let res;
        try {
            res = await axios.get<Project[]>(URL, {
                params: {
                    name,
                    isCollects
                },
            });
            // console.log(res.data)
            return [...res.data];
        } catch (error) {
            console.log(error.message);
        }
    },
    async createNewProject(project :Project):Promise<Project>{
        try {
            const response = await axios.post<Project>(URL, project);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async likeProject(project_id, user_id = 1){
        // console.log('uid: ',user_id);
        try {
            const response = await axios.post<Project>(URL + `/${project_id}/like`,
                {"user_id":user_id});
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async unlikeProject(project_id, user_id = 1){
        try {
            const response = await axios.delete<Project>(URL + `/${project_id}/like`,
                {data:{"user_id":user_id}});
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async getProjectLikeStatus(project_id, user_id = 1){
        try {
            const response = await axios.get<Project>(URL + `/${project_id}/like`,
                {params:{"user_id":user_id}});
            console.log('project.id ', project_id,' :', response.data);
            return response.data;
        } catch (error) {
            console.log('font error: ', error.message);
        }
    },
}


