import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./featurs/authSlice"
import ContactReduser from "./featurs/contactUsSlice"
import ComplainReduser from "./featurs/complainSlice"

export default configureStore({
    reducer:{
        auth:AuthReducer,
        contact:ContactReduser,
        complain:ComplainReduser
    }
});