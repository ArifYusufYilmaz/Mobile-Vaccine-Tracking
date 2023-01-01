import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VaccineDate from "./VaccineDate";
import VaccineDateInfo from "./VaccineDateInfo";
import VaccineGenre from "./VaccineGenre";
export default function VaccineCard(props){

    const [genresVisible, setGenresVisible] = useState(false);
    
    function handleGenresVisibility(){
        setGenresVisible(!genresVisible);
        
    }
    
     const renderGenres = ({item}) =>  <VaccineGenre genre={item}></VaccineGenre>
    return(
        <View>
            <TouchableOpacity onPress={handleGenresVisibility} >
                <View style = {styles.body}>
                    <VaccineDateInfo vaccineDateTitle={props.vaccineDateTitle}></VaccineDateInfo>
                    <VaccineDate vaccineDate={props.vaccineDate}></VaccineDate>
                </View>
            </TouchableOpacity>
            {genresVisible &&
                 <FlatList keyExtractor={(item, index)=> index.toString()} data={props.genres} renderItem={renderGenres}/>   
             }
        </View>
    );
}
const styles = StyleSheet.create({
    body :{
        flexDirection: "row",
    }
})