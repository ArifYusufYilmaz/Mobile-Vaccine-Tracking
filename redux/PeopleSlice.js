import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// {firstName: "", lastName: "", birthDate : null}
export const PeopleSlice = createSlice({
    name : 'people',
    initialState:{
        value : []
    },
    reducers:{
        savePerson : (state, action)  => {
            state.value = [...state.value, action.payload]
        }
    }
})
export const selectPeople = (state ) => state.people.value;
export const {savePerson} = PeopleSlice.actions
export default PeopleSlice.reducer