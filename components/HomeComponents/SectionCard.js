import React from "react";
import { StyleSheet, View,Text, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default function SectionCard(props){

    return(
        <View style={styles.container}>
            <Text>
                asdad
            </Text>
            <Text>
                icon
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
        backgroundColor: "red",
        justifyContent: "center",
        alignItems:"center",
    }
})