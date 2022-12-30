import React from "react";
import { StyleSheet, Text, View } from "react-native";
import VaccineDate from "./VaccineDate";
import VaccineDateInfo from "./VaccineDateInfo";
import VaccineGenre from "./VaccineGenre";
export default function VaccineCard(){
    return(
        <View style = {styles.container}>
            <VaccineDateInfo></VaccineDateInfo>
            
            <VaccineDate></VaccineDate>
        </View>
    );
}
const styles = StyleSheet.create({
    container :{
        flexDirection: "row",
    }
})