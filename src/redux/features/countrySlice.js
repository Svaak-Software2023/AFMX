import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getAll_Country =createAsyncThunk("get/all/country",async ()=>{
    try{
        const response=await api.getAllCountry();
        console.log('response..pp',response.data);
        return response.data
    }catch(err){
        
        console.log(err)
        throw err
    }
});

const countrySlice = createSlice({
    name: "allcountry",
    initialState: {
        country: [],
        error: "",
        loading: false,
    },
    reducers: {},
    extraReducers:(builder)=> {
       builder 
       .addCase(getAll_Country.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getAll_Country.fulfilled,(state,action)=>{
            state.loading=false
            console.log('action.payload?.getResponse',action.payload?.getResponse);
            state.country=action.payload?.getResponse
        })
        .addCase(getAll_Country.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error
        })
    },
})

export default countrySlice.reducer;