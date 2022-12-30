import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from  "react-native-modal-datetime-picker";

export default function PersonInserting(){
    const [date, setDate] = useState(new Date())
    const [dateVisible, setDateVisible] = useState(false)
    
    function addYearToDate(){
       const newDate = date;
       newDate.setFullYear(date.getFullYear()+15);
       setDate(newDate);
    }

    return(
        <View>
            <Text>
                Hi person inserting
                isim soyisim
                doğum tarihi
            </Text>
            <Button title="Open Date" onPress={()=> setDateVisible(true)}></Button>
            <DateTimePickerModal
            isVisible= {dateVisible}
            mode = "date"
            onConfirm={(date)=> {setDate(date), setDateVisible(false)}}
            onCancel = {()=> setDateVisible(false)}
            />
            <TouchableOpacity onPress={addYearToDate}>
                 <Text> {date.getFullYear()}</Text>
            </TouchableOpacity>
           
            
        </View>
       
        
    );
}