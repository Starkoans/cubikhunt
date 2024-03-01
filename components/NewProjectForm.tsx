import {StyleSheet, Text, TextInput, View, ScrollView, Modal, Pressable, SafeAreaView} from "react-native";
import React, {useState} from "react";
import {Project, Categories} from "../types";
import {projectsService} from "../services/projects.service";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {Button} from "./Button";
import {InputText} from "./InputText";
import {Dropdown} from "./Dropdown";

export const NewProjectForm = () => {
    const [newProject, setNewProject] = useState<Project>({end_date: new Date(), name: "", target_amount: 0});
    const [isCreated, setIsCreated] = useState(false);
    const handleInputName = (text) => {
        setNewProject({...newProject, name: text});
    };
    const handleInputEndDate = (event, endDate) => {
        setNewProject({...newProject, end_date: new Date(endDate)});
    };
    const handleInputTargetAmount = (text) => {
        setNewProject({...newProject, target_amount: +text});
    };
    const handleInputDescription = (text) => {
        setNewProject({...newProject, description: text});
    };
    const handleSubmit = () => {
        console.log(newProject);
        projectsService.createNewProject(newProject).then((data)=> {
                if (data) {
                    setIsCreated(true)
                }
            }
        )

    };
    return(
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.form}>
                <Text style={styles.tittle}>Новый проект</Text>
                <InputText
                    label={"Название проекта"}
                    handleInput={handleInputName}
                    value={newProject.name}
                    placeholder={"Введите название"}
                />
                <InputText
                    label={"Цель, Р"}
                    handleInput={handleInputTargetAmount}
                    value={String(newProject.target_amount) == 0 ? "" : String(newProject.target_amount) }
                    placeholder={"Введите сумму"}
                    keyboardType="numeric"
                />
                <InputText
                    label={"Краткое описание проекта"}
                    handleInput={handleInputDescription}
                    value={newProject.description}
                    placeholder={"Не более 250 символов"}
                    multiline={true}
                    numberOfLines={4}
                />
                <Dropdown handler={(text) => {setNewProject({...newProject, category: text})}}
                          selectedValue={newProject.category}
                          defaultValue="Выберите категорию"
                          valueArr={Categories}
                />
                <View style={{flexDirection:'row', alignItems:"center"}}>
                    <Text >Дата окончания</Text>
                    <RNDateTimePicker mode="date"
                                      onChange={handleInputEndDate}
                                      value={newProject.end_date}
                                      locale="ru-RU"
                                      themeVariant="light"/>
                </View>
                <Button type="contained" text="Создать проект" onPress={handleSubmit} style={{padding:5, alignItems:"center"}}/>
        </View>
            <Modal
                animationType="slide"
                transparent={isCreated}
                visible={isCreated}
                onRequestClose={() => {
                    setIsCreated(false);
                }}>
                <View
                    style={styles.modalView}
                >
                    <Text>Проект был создан!</Text>
                    <Button type="contained" onPress={()=>setIsCreated(false)} text="Ок"/>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalView:{
        alignSelf:"center",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    form:{
        borderWidth: 1,
        borderRadius:5,
        borderColor: "gray",
        padding:20,
        margin: 15,
        gap:20
    },
    tittle:{
        fontSize:20,
        fontWeight: "600"
    },

})