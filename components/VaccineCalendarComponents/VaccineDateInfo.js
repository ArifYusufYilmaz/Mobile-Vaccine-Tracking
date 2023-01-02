import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function VaccineDateInfo(props){
   return(
    <View style={styles.container}>
        <Text style={styles.textStyle}>
            {props.vaccineDateTitle}
        </Text>
    </View>
   );
}
const styles = StyleSheet.create({
    container: {
    },
    textStyle:{
        fontSize: 25,
    }

})