import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SectionCard from "../components/HomeComponents/SectionCard";



export default function HomeScreen(props){
    function handleNavigation(){
        props.navigation.navigate('TrackingPeopleForVaccineInfo');
    }
    function handlePersonNavigation(){
        props.navigation.navigate('Person');
    }
    function handleVaccineListNavigation(){
        props.navigation.navigate('VaccineList');
    }
    function handleReminderNavigation(){
        props.navigation.navigate('TrackingPeopleForVaccineReminder');
    }
    return(
        <View style={styles.container}>
           
                <View style = {styles.body}>
                    <View style = {styles.card}>
                        <TouchableOpacity onPress ={handlePersonNavigation} style={{flex:1}}>
                            <SectionCard title={"Kişi Ekle"} iconName={"person-add-outline"}></SectionCard> 
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.card}>
                          <TouchableOpacity onPress ={handleNavigation} style={{flex:1}}>
                              <SectionCard title={"Aşı Takvimi"} iconName={"calendar-outline"}></SectionCard> 
                          </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {styles.card}>
                        <TouchableOpacity onPress={handleVaccineListNavigation} style={{flex:1}}>
                            <SectionCard title={"Aşı Listesi"} iconName={"list-circle-outline"}></SectionCard>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.card}>
                        <TouchableOpacity onPress={handleReminderNavigation} style={{flex:1}}>
                            <SectionCard title={"Aşı Hatırlatıcı"} iconName={"notifications-outline"}></SectionCard>
                        </TouchableOpacity>
                    </View>
                </View>
               
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
    },
    body:{
        flexDirection:"row",
    },
    card:{
        flex:2,
        height:150,
    }

})