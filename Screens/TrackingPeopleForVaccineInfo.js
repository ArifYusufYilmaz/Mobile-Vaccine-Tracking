import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectPeople } from "../redux/PeopleSlice";
import PersonCard from "../components/PersonComponents/PersonCard";
export default function TrackingPeopleForVaccineInfo(props){
    const people = useSelector(selectPeople)

    function handleVaccineCScreenNavigation(person){
        props.navigation.navigate('VaccineCalendarScreen', {person : person})
    }


     const renderPeople = ({item}) =>  <View>
                                            <TouchableOpacity onPress={()=>handleVaccineCScreenNavigation(item)}>
                                                <PersonCard person={item}></PersonCard>
                                            </TouchableOpacity>
                                       </View> 
    return(
        <View>
            <FlatList keyExtractor={(item,index)=> index.toString()} data={people} renderItem={renderPeople}></FlatList>

        </View>
    );
}
