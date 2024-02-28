import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"


export const signin=createAsyncThunk("api/sigin", async({formData,navigate,toast})=>{
    try{
        const response=await api.signin(formData)
        toast.success(response.data.message)
        navigate("/user-dashboard")
        console.log(response,"this is responce");
        return response.data.signInResponse
    }catch(err){
        console.log(err);
        return err.response.data
    }
})

export const signup=createAsyncThunk("api/signup", async({formData,navigate,toast})=>{
    try{
        const response=await api.signup(formData)
        if(response){
        toast.success(response.data.message)
        navigate("/login")
        return response.data
        }
    }catch(err){
        return toast.error(err.response.data.message)
    }
})

const authSlice =createSlice({
    name:"auth",
    initialState:{
        user:null,
        error:"",
        loading:false,
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },

    },

    extraReducers:{
        [signin.pending]:(state)=>{
            state.loading=true
        },
        [signin.fulfilled]:(state,action)=>{
            state.loading=false;
            localStorage.setItem('user',JSON.stringify(action.payload))
            state.user=action.payload;
            state.error=action.payload.error;
        },
        [signin.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload.message;
        },
        [signup.pending]:(state)=>{
            state.loading=true
        },
        [signup.fulfilled]:(state,action)=>{
            state.loading=false;
            // localStorage.setItem('user',JSON.stringify(action.payload.signUpResponse))
            state.user=action.payload;
        },
        [signup.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload.message;
        }
    }
});

export const {setUser}=authSlice.actions
export default authSlice.reducer
