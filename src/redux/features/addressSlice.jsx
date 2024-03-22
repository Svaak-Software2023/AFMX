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

export const addAddress=createAsyncThunk("addAddress",async({addNewForm,toast,token})=>{
    try{
    const response= await api.addAddress(addNewForm,token)
    if(response.data){
        toast.success(response.data.message)
        return response.data
    }
    }catch(err){
        toast.error(response.data.error)
    }
    });

export const getAllAddress=createAsyncThunk("allAddress",async({toast,token})=>{
    try{
    const response= await api.getAllAddress(token)
    if(response.data){
        toast.success(response.data.message)
    }
    return response.data    


    }catch(err){
        toast.error(response.data.error)
    }
    });

export const deleteAddress=createAsyncThunk("deleteAddress",async({deliveryAddressId,toast,token})=>{
    try{
        console.log('..deliveryAddressId',deliveryAddressId);
    const response= await api.deleteAddress(deliveryAddressId,token)
    if(response.data){
        toast.success(response.data.message)
    }
    return response.data    
    }catch(err){
        toast.error(response.data.error)
    }
    });
export const patchAddress=createAsyncThunk("patchAddress",async({updateNewForm,toast,token})=>{
    try{
        console.log('updateNewForm updateNewForm',updateNewForm);
    const response= await api.patchAddress(updateNewForm,token)
    if(response.data){
        toast.success(response.data.message)
    }
    return response.data    
    }catch(err){
        toast.error(response.data.error)
    }
    });

  


const addressSlice=createSlice({
    name:"all_Address",
    initialState: {
        data: [],
        singleAddress: {},
        error: "",
        loading: false,
        message:""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAddress.pending, (state, action) => {
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                state.data.push(action.payload.productDeliveryAddressResponse);
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(addAddress.rejected, (state, action) => {
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(getAllAddress.pending, (state, action) => {
                state.data=[]
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(getAllAddress.fulfilled, (state, action) => {
                state.data=action.payload.getAllDeliveryAddressResponse
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(getAllAddress.rejected, (state, action) => {
                state.data=[]
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(getSingleAddress.pending, (state, action) => {
                state.singleAddress= null
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(getSingleAddress.fulfilled, (state, action) => {
                state.singleAddress=action.payload?.getSingleDeliveryAddressResponse
                state.message = action.payload?.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(getSingleAddress.rejected, (state, action) => {
                state.singleAddress= null
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(deleteAddress.pending, (state, action) => {
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.data=action.payload.deleteDeliveryAddressResponse
                state.data=state.data.filter(({deliveryAddressId}) => deliveryAddressId !== action.payload.deleteDeliveryAddressResponse.deliveryAddressId)
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(patchAddress.pending, (state, action) => {
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(patchAddress.fulfilled, (state, action) => {
                state.data=action.payload.deleteDeliveryAddressResponse
                state.data=state.data.filter(({deliveryAddressId}) => deliveryAddressId !== action.payload.updateDeliveryAddressResponse.deliveryAddressId)
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(patchAddress.rejected, (state, action) => {
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
    }
});
export default addressSlice.reducer
 
