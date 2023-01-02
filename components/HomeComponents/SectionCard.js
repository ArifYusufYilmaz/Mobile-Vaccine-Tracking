import React from "react";
import { StyleSheet, View,Text, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowHeight = Dimensions.get('window').height;

export default function SectionCard(props){

    return(
        <View style={styles.container}>
            <Ionicons name={props.iconName} size={50}> </Ionicons>
            <Text style={styles.textStyle}>
                {props.title}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding : 10,
        margin: 10,
        height : windowHeight/7, 
        borderRadius: 20,
        backgroundColor: "#05F77E",
        justifyContent: "center",
        alignItems:"center",
    },
    textStyle:{
        fontSize: 20,
    }
})