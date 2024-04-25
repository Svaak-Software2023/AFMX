import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"


export const signin=createAsyncThunk("api/sigin", async({formData,navigate,toast})=>{
    try{
        const response=await api.signin(formData)
        console.log('response..',response);
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
        const addFormData = new FormData();
        for (const [key, val] of Object.entries(formData)){
            addFormData.append(key, val);
        }
        const response=await api.signup(addFormData)
        if(response){
        toast.success(response.data.message)
        navigate("/login")
        return response.data
        }
    }catch(err){
        console.log("err",err)
        return toast.error(err.response.data.error)
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
