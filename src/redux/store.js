import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./featurs/authSlice";
import ContactReducer from "./featurs/contactUsSlice";
import ComplainReducer from "./featurs/complainSlice";
import ProductReducer from "./featurs/productSlice";
import careerReducer from "./featurs/careerSlice";
<<<<<<< Updated upstream
import cartSlice from "./featurs/cartSlice";
=======
import addressReducer from "./featurs/addressSlice";
>>>>>>> Stashed changes

export default configureStore({
  reducer: {
    auth: AuthReducer,
    contact: ContactReducer,
    complain: ComplainReducer,
    products: ProductReducer,
<<<<<<< Updated upstream
    
    cart:cartSlice
=======
    career: careerReducer,
    address:addressReducer
>>>>>>> Stashed changes
  },
});
