import {SafeAreaView, Text, View} from "react-native";
import {Header} from "../components/Header";

export const CommentsScreen =() => {
    return(
        <SafeAreaView>
            <Header icon="back"/>
            <Text>Комментарии</Text>
        </SafeAreaView>
    )
}