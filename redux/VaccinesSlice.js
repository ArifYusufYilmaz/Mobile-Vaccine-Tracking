import { createSlice } from "@reduxjs/toolkit";
export const VaccinesSlice = createSlice({
    name: "vaccines",
    initialState:{
        value : []
    },
    reducers:{
        saveVaccine: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})
export const selectVaccines = (state)=> state.vaccines.value;
export const {saveVaccine} = VaccinesSlice.actions
export default VaccinesSlice.reducer