import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./featurs/authSlice";
import ContactReducer from "./featurs/contactUsSlice";
import ComplainReducer from "./featurs/complainSlice";
import ProductReducer from "./featurs/productSlice";
import careerReducer from "./featurs/careerSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    contact: ContactReducer,
    complain: ComplainReducer,
    products: ProductReducer,
    career: careerReducer,
  },
});
