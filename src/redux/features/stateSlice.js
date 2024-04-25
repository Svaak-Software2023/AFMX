import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getAll_States =createAsyncThunk("get/all/states",async (countryId)=>{
    try{
        const response=await api.getAllState(countryId);
        console.log('response..state',response.data);
        return response.data
    }catch(err){
        
        console.log(err)
        throw err
    }
});

const stateSlice = createSlice({
    name: "allstates",
    initialState: {
        stateList: [],
        error: "",
        loading: false,
    },
    reducers: {},
    extraReducers:(builder)=> {
       builder 
       .addCase(getAll_States.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getAll_States.fulfilled,(state,action)=>{
            state.loading=false
            console.log('action.payload?.getResponse',action.payload?.getResponse);
            state.stateList=action.payload?.getResponse
        })
        .addCase(getAll_States.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error
        })
    },
})

export default stateSlice.reducer;