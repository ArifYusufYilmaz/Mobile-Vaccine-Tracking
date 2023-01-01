import React from "react";
import { Text, View } from "react-native";
export default function VaccineDate(props){
    return(
        <View>
            <Text>
                {props.vaccineDate}
            </Text>
        </View>
    );
}