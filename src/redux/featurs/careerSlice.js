import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"
import {toast} from "react-toastify"

export const submitForm = createAsyncThunk("/submit/carrer/form", async (formData) => {
    try {
        const response = await api.submitCreerForm(formData)
        console.log("response",response);
        toast.success(response?.data?.message)
        return response.data

    } catch (error) {
        console.log("Error",error);
        toast.error(error?.response?.data?.error)
        throw error.response
    }
})
const careerSlice = createReducer({
    name: "careerSlice",
    initialState: {
        message: "",
        error: "",
        loading: false
    },
    reducers:{},
    extrareducer: (builder) => {
        builder
            .addcase(submitForm.pending, (state, action) => {
                state.message = ""
                state.error = ""
                state.loading = true
            })
            .addcase(submitForm.pending, (state, action) => {
                state.message = action.message
                state.error = ""
                state.loading = false
            })
            .addcase(submitForm.pending, (state, action) => {
                state.message = ""
                state.error = action.error
                state.loading = false
            })
    }
})

export default careerSlice.reducers