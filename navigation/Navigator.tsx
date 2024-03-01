import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "../screens/home/HomeScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import * as Solid from "react-native-heroicons/solid"

import {RootStackParamList} from "./navigationTypes";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FiltersScreen} from "../screens/FiltersScreen";
import {ProjectScreen} from "../screens/ProjectScreen";
import {CommentsScreen} from "../screens/CommentsScreen";


export function Navigator() {
    const Tab = createBottomTabNavigator<RootStackParamList>();

    return (
        <Tab.Navigator
            initialRouteName="Главная"
            screenOptions={{tabBarShowLabel:false, headerShown:false}}>
            <Tab.Screen name="Уведомления"
                        options={{
                            tabBarIcon: ({focused, color, size})=>
                                <Solid.BellIcon fill={focused? "blue": "black"}/>
                        }}
                        component={ProfileScreen} />
            <Tab.Screen name="Главная"
                        options={{
                            tabBarIcon: ({focused, color, size}) =>
                                <Solid.HomeIcon fill={focused? "blue": "black"}/>,
                        }
                        }
                        component={StackNavigator}
            />
            <Tab.Screen name="Профиль"
                        options={{
                            tabBarIcon: ({focused, color, size})=>
                                <Solid.UserIcon fill={focused? "blue": "black"}/>
                        }}
                        component={ProfileScreen} />
            <Tab.Screen name="Сообщения"
                        options={{
                            tabBarIcon: ({focused, color, size})=>
                                <Solid.EnvelopeIcon fill={focused? "blue": "black"}/>
                        }}
                        component={ProfileScreen} />

        </Tab.Navigator>
    );
};

export const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Filters" component={FiltersScreen} />
            <Stack.Screen name="Project" component={ProjectScreen} />
            <Stack.Screen name="Comments" component={CommentsScreen} />
        </Stack.Navigator>
    )
}