import React from "react";
import { Text, View } from "react-native";
import PersonCard from "../components/PersonComponents/PersonCard";
import PersonInserting from "../components/PersonComponents/PersonInserting";
export default function PersonScreen(){
    return(
        <View>
            <PersonInserting></PersonInserting>
        </View>
    );
}