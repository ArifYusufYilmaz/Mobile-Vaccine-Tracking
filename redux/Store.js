import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./PeopleSlice";
import vaccinesReducer from "./VaccinesSlice";
export const store = configureStore({
    reducer :{
        people : peopleReducer,
        vaccines : vaccinesReducer,
    }
})
