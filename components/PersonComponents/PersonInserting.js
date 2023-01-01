import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from  "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux";
import { save, selectPeople } from "../../redux/PeopleSlice";

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
             dispatch(save(personToAdd));
             setSendButtonVisible(false)
           
        }
    }
    const renderPeople = ({item}) => <Text>{JSON.stringify(item)}</Text>

    return(
        <View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit, setFieldValue}) =>
                <>
                   { console.log(values)}
                    <TextInput placeholder="İsim.."  value={values.firstName} onChangeText={handleChange('firstName')}/>
                    <TextInput placeholder="Soyisim.." value={values.lastName} onChangeText={handleChange('lastName')}/>
                     <TextInput placeholder={ DateFormatter(date) } value={values.birthDate}   />
                    <Button title= "Open Date" onPress={()=> setDateVisible(true)}></Button>
                    <DateTimePickerModal
                        isVisible= {dateVisible}
                        mode = "date"
                        onConfirm={(date)=> {setDate(date), setDateVisible(false), setSendButtonVisible(true), setFieldValue('birthDate', date)}}
                        onCancel = {()=> setDateVisible(false)}
                    />
                    <Button title="Kisi Ekle" disabled={!sendButtonVisible} onPress={handleSubmit}></Button>
                </>
            }   
            </Formik>
        
            <FlatList  keyExtractor={(item,index)=>index.toString()} data={people} renderItem={renderPeople}></FlatList>

            
        </View>
       
        
    );
}