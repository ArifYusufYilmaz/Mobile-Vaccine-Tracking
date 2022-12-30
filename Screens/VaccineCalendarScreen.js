import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import VaccineCard from '../components/VaccineCalendarComponents/VaccineCard';
import VaccineGenre from '../components/VaccineCalendarComponents/VaccineGenre';

export default function VaccineCalendarScreen(){
    const [genresVisible, setGenresVisible] = useState(true);
    function handleGenresVisibility(){
        setGenresVisible(!genresVisible);
    }
    
    return(
        <View>
            <TouchableOpacity onPress={handleGenresVisibility}>
                <VaccineCard></VaccineCard>
                {genresVisible && 
                <VaccineGenre></VaccineGenre>     
                }
            </TouchableOpacity>
          </View>
    );
}
const style= StyleSheet.create({

})
