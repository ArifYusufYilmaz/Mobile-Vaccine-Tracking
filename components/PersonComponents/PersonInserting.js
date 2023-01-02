import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from  "react-native-modal-datetime-picker";
import  Toast  from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { savePerson, selectPeople } from "../../redux/PeopleSlice";

import DateFormatter from "../../utils/DateFormatter";



export default function PersonInserting(){
    const [date, setDate] = useState(new Date())
    const [dateVisible, setDateVisible] = useState(false)
    const [sendButtonVisible, setSendButtonVisible] = useState(false)
    

      const people = useSelector(selectPeople)
      const dispatch = useDispatch()
    
    const initialFormValues = {
        firstName: "",
        lastName: "",
        birthDate: null,
    }
    function handleFormSubmit(formValues){
         
        if(formValues.firstName.trim().length  === 0 || formValues.lastName.trim().length  === 0){
           return;
        }else {
            const personToAdd = {
                firstName : formValues.firstName,
                lastName : formValues.lastName,
                birthDate : DateFormatter(formValues.birthDate)
                
            }
             dispatch(savePerson(personToAdd));
             setSendButtonVisible(false)
             Toast.show({
                type: 'success',
                text1: "Kişi Eklendi",
                position :"top",
             })
        }
    }
    

    return(
        <View >
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit, setFieldValue}) =>
                <>
                     
                    <TextInput style={styles.inputStyle} placeholder="İsim.."  value={values.firstName} onChangeText={handleChange('firstName')}/>
                    <TextInput style={styles.inputStyle} placeholder="Soyisim.." value={values.lastName} onChangeText={handleChange('lastName')}/>
                    <TouchableOpacity onPress={()=> setDateVisible(true)}>
                    <TextInput style={styles.inputStyle} placeholder={ DateFormatter(date) } editable={false} value={values.birthDate}   />
                    </TouchableOpacity>
                    
                    <DateTimePickerModal
                        isVisible= {dateVisible}
                        mode = "date"
                        onConfirm={(date)=> {setDate(date), setDateVisible(false), setSendButtonVisible(true), setFieldValue('birthDate', date)}}
                        onCancel = {()=> setDateVisible(false)}
                    />
                    <View style={styles.buttonStyle}>
                    <Button  title="Kisi Ekle" disabled={!sendButtonVisible} onPress={handleSubmit}></Button>
                    </View>
                </>
            }   
            </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    
    inputStyle:{
        padding: 10,
        margin: 10,
        fontSize: 30,
    },
    buttonStyle:{
        padding: 20,
        margin: 10,
        
    }
})