import {SafeAreaView, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {useState} from "react";
import {Header} from "../components/Header";
import {Dropdown} from "../components/Dropdown";
import {Categories} from "../types";
export const FiltersScreen = () => {
    const [category, setCategory] = useState("Выберите категорию")
  return(
      <SafeAreaView >
          <Header icon="close"/>
          <View style={{flexDirection:'row', gap:15, alignItems:'center', justifyContent:'center', padding:15}}>
                <View style={{flexDirection:'row', gap:3}}>
                    <TouchableOpacity style={{width:20, height:20, borderRadius:2, borderWidth:2,borderColor:'gray'}}></TouchableOpacity>
                    <Text style={{fontSize:16}}>Собирают</Text>
                </View>
              <View style={{flexDirection:'row', gap:3}}>
                  <TouchableOpacity style={{width:20, height:20, borderRadius:2, borderWidth:2,borderColor:'gray'}}></TouchableOpacity>
                  <Text style={{fontSize:16}}>Завершенные</Text>
              </View>
          </View>
            <View style={{alignItems:'center'}}>
            <Dropdown valueArr={Categories}
                      defaultValue="Выберите категорию"
                      handler={setCategory}
                      selectedValue={category}/>
            </View>

      </SafeAreaView>
  )
}
