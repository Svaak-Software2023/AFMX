import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ContactReducer from "./features/contactUsSlice";
import ComplainReducer from "./features/complainSlice";
import ProductReducer from "./features/productSlice";
import cartSlice from "./features/cartSlice";
import addressReducer from "./features/addressSlice";

import JobSlice from "./features/JobSlice";
import miniTvSlice from "./features/miniTvSlice";
import countrySlice from "./features/countrySlice";
import stateSlice from "./features/stateSlice";


export default configureStore({
  reducer: {
    auth: AuthReducer,
    contact: ContactReducer,
    complain: ComplainReducer,
    products: ProductReducer,
    cart:cartSlice,
    address:addressReducer,
    JobSlice:JobSlice,
    miniTv:miniTvSlice,
    country:countrySlice,
    state:stateSlice
   
  },
});

