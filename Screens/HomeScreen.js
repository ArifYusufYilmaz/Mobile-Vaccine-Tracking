import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SectionCard from "../components/HomeComponents/SectionCard";



export default function HomeScreen(props){
    function handleNavigation(){
        props.navigation.navigate('VaccineCalendar');
    }
    return(
        <View style={styles.container}>
                <View style = {styles.body}>
                    <View style = {styles.card}>
                        <TouchableOpacity onPress ={handleNavigation} style={{flex:1}}>
                            <SectionCard ></SectionCard> 
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.card}>
                          <TouchableOpacity onPress ={handleNavigation} style={{flex:1}}>
                              <SectionCard ></SectionCard> 
                          </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {styles.card}>
                        <TouchableOpacity style={{flex:1}}>
                            <SectionCard ></SectionCard>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.card}>
                        <TouchableOpacity style={{flex:1}}>
                            <SectionCard ></SectionCard>
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