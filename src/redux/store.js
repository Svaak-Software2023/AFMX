import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./featurs/authSlice"
import ContactReduser from "./featurs/contactUsSlice"
export default configureStore({
    reducer:{
        auth:AuthReducer,
        contact:ContactReduser
    }
});