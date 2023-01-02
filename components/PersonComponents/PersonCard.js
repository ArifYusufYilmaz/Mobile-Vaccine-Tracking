import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function PersonCard(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textStyles}>
               {props.person.firstName} {props.person.lastName}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginHorizontal:20,
        marginVertical:10,
        height : 100,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyles:{
        color: "red",
        fontSize: 30,
    }

})