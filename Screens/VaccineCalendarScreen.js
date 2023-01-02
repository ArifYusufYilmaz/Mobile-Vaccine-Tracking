import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import VaccineCard from '../components/VaccineCalendarComponents/VaccineCard';
import { AddToDate, DateReFormatter } from '../utils/DateFormatter';

export default function VaccineCalendarScreen(props){
    const person = props.route.params.person;

    

    return(
        <View style={styles.container}>
                <VaccineCard style={styles.cardStyle} vaccineDateTitle="Doğumda" vaccineDate={AddToDate(person.birthDate,0,0)} genres={["Hep-B"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="1.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 1,0)} genres={["Hep-B"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="2.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 2,0)} genres={["BCG","KPA","DaBT-İPA-Hib"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="4.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 4,0)} genres={["KPA","DaBT-İPA-Hib"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="6.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 6,0)} genres={["Hep-B","OPA","DaBT-İPA-Hib"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="12.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 0,1)} genres={["KPA","Su Çiçeği", "KKK"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="18.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 6,1)} genres={["DaBT-İPA-Hib","OPA", "Hep-A"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="24.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 0,2)} genres={["Hep-A"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="48.Ayın Sonu" vaccineDate={AddToDate(person.birthDate, 0,4)} genres={["KKK", "DaBT-İPA"]}></VaccineCard>
                <VaccineCard vaccineDateTitle="13.Yaş" vaccineDate={AddToDate(person.birthDate, 0,13)} genres={["Td"]}></VaccineCard> 
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
        flex:1,
        padding:5,
        marginVertical: 10,
        
    },
    cardStyle:{
    }


})
