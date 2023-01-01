import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// {firstName: "", lastName: "", birthDate : null}
export const PeopleSlice = createSlice({
    name : 'people',
    initialState:{
        value : []
    },
    reducers:{
        save : (state, action)  => {
            state.value = [...state.value, action.payload]
        }
    }
})
export const selectPeople = (state ) => state.people.value;
export const {save} = PeopleSlice.actions
export default PeopleSlice.reducer