import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import  Toast  from "react-native-toast-message";

import { useSelector } from "react-redux";
import { selectVaccines } from "../redux/VaccinesSlice";
export default function VaccineReminderScreen(props){

    const vaccines = useSelector(selectVaccines);

    const renderVaccines =({item}) => <View style ={styles.body}>
                                            <View>
                                            <Text style={styles.textStyles}>{item.genre} </Text>
                                            </View>
                                            <View>
                                            <Text style={styles.textStyles}>{item.title}</Text>
                                            </View>
                                      </View>
    return(
        <View style={styles.body}>
            <FlatList keyExtractor={(item, index)=> index.toString()} data={vaccines} renderItem={renderVaccines}/>  
            {Toast.show({
                 type: 'error',
                 text1: "AŞI EKSİĞİNİZ BULUNMAKTA!",
                 position :"bottom",
                 
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
    },
    body:{
        padding:10,
        justifyContent:"space-around",
        flexDirection: "row",
    },
    textStyles: {
        fontSize: 20,
        fontWeight: "bold",
    }
})
