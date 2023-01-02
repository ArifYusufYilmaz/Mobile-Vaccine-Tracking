import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectPeople } from "../redux/PeopleSlice";
import PersonCard from "../components/PersonComponents/PersonCard";

export default function TrackingPeopleForVaccineReminder(props){
    const people = useSelector(selectPeople)

    function handleVaccineReminderSreenNavigation(person){
        props.navigation.navigate('VaccineReminder', {person : person})
    }


     const renderPeople = ({item}) =>  <View>
                                            <TouchableOpacity onPress={()=>handleVaccineReminderSreenNavigation(item)}>
                                                <PersonCard person={item}></PersonCard>
                                            </TouchableOpacity>
                                       </View> 
    return(
        <View>
            <FlatList keyExtractor={(item,index)=> index.toString()} data={people} renderItem={renderPeople}></FlatList>

        </View>
    );
}
