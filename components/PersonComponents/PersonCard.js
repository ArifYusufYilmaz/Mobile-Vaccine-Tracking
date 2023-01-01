import React from "react";
import { Text, View } from "react-native";


export default function PersonCard(props){
    return(
        <View>
            <Text>
            {JSON.stringify(props.person)}
            </Text>
        </View>
    );
}