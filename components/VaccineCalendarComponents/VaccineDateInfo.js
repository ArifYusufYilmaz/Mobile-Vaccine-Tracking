import React from "react";
import { Text, View } from "react-native";
export default function VaccineDateInfo(props){
   return(
    <View>
        <Text>
            {props.vaccineDateTitle}
        </Text>
    </View>
   );
}