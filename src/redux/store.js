import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ContactReducer from "./features/contactUsSlice";
import ComplainReducer from "./features/complainSlice";
import ProductReducer from "./features/productSlice";
import careerReducer from "./features/careerSlice";
import cartSlice from "./features/cartSlice";
import addressReducer from "./features/addressSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    contact: ContactReducer,
    complain: ComplainReducer,
    products: ProductReducer,
    cart:cartSlice,
    career: careerReducer,
    address:addressReducer
  },
});

