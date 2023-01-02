import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useDispatch, useSelector } from "react-redux";
import { saveVaccine,selectVaccines } from "../../redux/VaccinesSlice";
import VaccineDate from "./VaccineDate";
import VaccineDateInfo from "./VaccineDateInfo";
import VaccineGenre from "./VaccineGenre";
export default function VaccineCard(props){
    
    const [genresVisible, setGenresVisible] = useState(false);
    
    function handleGenresVisibility(){
        setGenresVisible(!genresVisible);
    }

    const vaccines = useSelector(selectVaccines);
    const dispatch = useDispatch();
    
    function handleAddVaccine(genre, title){
        const vaccine = {
            genre : genre,
            title : title
        }
        dispatch(saveVaccine(vaccine));
        Toast.show({
            type: 'success',
            text1: "Aşı Eklendi",
            position :"top",
        })
    }

    
     const renderGenres = ({item}) =>  <>
                                         <View style={styles.genreBody}>
                                            <TouchableOpacity onPress={()=> handleAddVaccine(item, props.vaccineDateTitle)}>
                                                 <VaccineGenre genre={item}></VaccineGenre>
                                            </TouchableOpacity>
                                         </View>
                                       </>
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGenresVisibility} >
                <View style = {styles.infoBody}>
                    <View style={styles.dateInfo}>
                    <VaccineDateInfo vaccineDateTitle={props.vaccineDateTitle}></VaccineDateInfo>
                    </View>
                    <View style={styles.date}>
                    <VaccineDate vaccineDate={props.vaccineDate}></VaccineDate>
                    </View>
                </View>
            </TouchableOpacity>
            {genresVisible &&
                
                 <FlatList contentContainerStyle={styles.list} keyExtractor={(item, index)=> index.toString()} data={props.genres} renderItem={renderGenres}/>   
                 
             }
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        margin:5,
        backgroundColor:"#0DF4A0",
    },
    infoBody :{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    dateInfo:{
    },
    date:{
    },
    list:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    genreBody:{
    },
  
})