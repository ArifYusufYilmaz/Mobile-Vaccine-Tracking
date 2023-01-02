import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function VaccineGenre(props){
    return(
        <View style={styles.container}>
            <Text style={styles.genreStyle}>
               {props.genre}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
       
       margin:10,

    },
    genreStyle:{
        fontSize: 20,
        fontWeight:"bold",
    }
})