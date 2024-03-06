import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getSingleAddress=createAsyncThunk("single-address",async({toast})=>{
try{
const response= await api.getSingleAddress();
if(response.data){
    toast.success(response.data.message)
    return response.data
}
}catch(err){
    console.log({err});
    toast.error(`${err.message} ${err.code} ${err.response.data.error}`);
}
});

export const addAddress=createAsyncThunk("addAddress",async({formData,toast})=>{
    try{
    const response= await api.addAddress(formData)
    if(response.data){
        toast.success(response.data.message)
        return response.data
    }
    }catch(err){
        toast.error(response.data.error)
    }
    })


const addressSlice=createSlice({
    name:"address",
    initialState: {
        allAddress: [],
        singleAddress: {},
        error: "",
        loading: false
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message=action.payload
        },
        extraReducers:{
            [getSingleAddress.pending]:(state)=>{
                state.loading=true
            },
            [getSingleAddress.fulfilled]:(state,action)=>{
                state.loading=false;
                state.message=action.payload;
                state.address.data=action.payload.singleAddressResponse
            },
            [getSingleAddress.rejected]:(state,action)=>{
                state.loading=false;
                state.error=action.payload.message;
            }
        }
    }
});
export const {setMessage}=addressSlice.actions
export default addressSlice.reducer
 
