import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function VaccineDate(props){
    return(
        <View>
            <Text style={styles.textStyles}>
                {props.vaccineDate}

            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
    },
    textStyles:{
        fontSize: 20,
       
    }

})