import {SafeAreaView, ScrollView} from "react-native";

import {NewProjectForm} from "../components/NewProjectForm";

export const ProfileScreen =() => {

    return(
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <NewProjectForm/>
            </ScrollView>
        </SafeAreaView>
    )
}