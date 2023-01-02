import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import VaccineGenre from "../components/VaccineCalendarComponents/VaccineGenre";
export default function VaccineListScreen(){
    const genres = ["Hep-B","BCG", "DaBT-İPA-Hib", "OPA", "Suçiçeği", "KKK", "Hep-A", "DaBT-İPA", "Td"]
   
   
   
    const renderGenres = ({item}) =>  <VaccineGenre genre={item}/>
   
   
    return(
        <View>
            <FlatList keyExtractor={(item,index)=> index.toString()} data={genres} renderItem={renderGenres}/>
          
        </View>
    );
}