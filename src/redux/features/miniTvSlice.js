import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getMiniTv =createAsyncThunk("get/minitv",async ()=>{
    try{
        const response=await api.getAllMinitv()
        console.log('response..',response);
        return response.data
    }catch(err){
        
        console.log(err)
        throw err
    }
});

const miniTvSlice = createSlice({
    name: "minitv",
    initialState: {
        minitv: [],
        error: "",
        loading: false,
    },
    reducers: {},
    extraReducers:(builder)=> {
       builder 
       .addCase(getMiniTv.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getMiniTv.fulfilled,(state,action)=>{
            state.loading=false
            state.minitv=action.payload?.miniTvGetSingleResponse
        })
        .addCase(getMiniTv.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error
        })
    },
})

export default miniTvSlice.reducer;