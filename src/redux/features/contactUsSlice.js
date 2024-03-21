import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const contactForm=createAsyncThunk("api/contact-us",async({formData,toast})=>{
try{
const response= await api.contactUs(formData)
if(response.data){
    toast.success(response.data.message)
    return response.data
}
}catch(err){
    toast.error(response.data.error)
}
})
const contactUs=createSlice({
    name:"contact-us",
    initialState:{
        message:"",
        error:"",
        loading:false
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message=action.payload
        },
        extraReducers:{
            [contactForm.pending]:(state)=>{
                state.loading=true
            },
            [contactForm.fulfilled]:(state,action)=>{
                state.loading=false;
                state.message=action.payload;
            },
            [contactForm.rejected]:(state,action)=>{
                state.loading=false;
                state.error=action.payload.message;
            }
        }
    }
});
export const {setMessage}=contactUs.actions
export default contactUs.reducer
 
