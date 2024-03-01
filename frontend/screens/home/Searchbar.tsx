import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

enum SearchSections {
    Projects = "Проекты",
    People = "Люди",
    Vacancy = "Вакансии",
    Resume = "Резюме"
}

export const Searchbar = ()=>{
    const navigation = useNavigation();

    const sectionsKeys = Object.keys(SearchSections)
    const [selectedSection, setSelectedSection] = useState(sectionsKeys[0]);
    const [text, setText] = useState('');
    const handleSelect = (section) => {
        setSelectedSection(section);
    };

    return(
        <View style={styles.search}>
            <View style={styles.select}>
                {
                    (Object.keys(SearchSections) as Array<keyof typeof SearchSections>).map((key ) => {
                        return(
                            <TouchableOpacity
                                key={key}
                                style={key == selectedSection? styles.buttonSelected : styles.button}
                                onPress={()=> {
                                    handleSelect(key);
                                }}>
                                <Text style={key == selectedSection? styles.buttonSelectedText : styles.buttonText}>{SearchSections[key]}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={{flexDirection:"row",marginTop:20 }}>
                <TextInput style={styles.textInput}
                           placeholder="Найти..."
                           onChangeText={newText => setText(newText)}
                           defaultValue={text}
                />
                <TouchableOpacity
                    style={styles.buttonSelected}
                    onPress={()=> {console.log('search')}}>
                    <Icons.MagnifyingGlassIcon size={25} color='white'/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonSelected, {marginLeft: 15}]}
                    onPress={()=> {navigation.navigate("Filters")}}>
                    <Text style={styles.buttonSelectedText }>Фильтры</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    search:{
        backgroundColor: '#292929',
        paddingVertical: 20,
        paddingHorizontal:20
    },
    select:{
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    button:{
        justifyContent: 'center',
        borderRadius:5,
        borderStyle: 'solid',
        borderWidth:1,
        borderColor:'#717E96',
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor:'#292929',
        color:'blue',
    },
    buttonText:{
        color:'#717E96',
        fontSize: 16,
    },
    buttonSelected:{
        justifyContent: 'center',
        borderRadius:5,
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor:'blue',
    },
    buttonSelectedText:{
        color:'white',
        fontSize: 16,
    },
    textInput:{
        width:162,
        backgroundColor:'white',
        fontSize: 16,
        paddingVertical:15,
        paddingHorizontal:10,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5
    }

})