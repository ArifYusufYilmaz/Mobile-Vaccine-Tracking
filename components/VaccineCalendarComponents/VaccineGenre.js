import React from 'react';
import { Text, View } from 'react-native';
export default function VaccineGenre(props){
    return(
        <View>
            <Text>
                hi genre {props.genre}
            </Text>
        </View>
    );
}