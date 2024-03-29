import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"
import { toast } from "react-toastify"

export const submitJobForm = createAsyncThunk('/Apply/job', async ({formData,navigate}) => {
    try {
        const response = await api.submitCareerForm(formData)
        console.log("response", response);
        toast.success(response?.data?.message)
        navigate("/careers-employment")
        return response.data
    }
    catch (error) {
        console.log("Error", error);
        toast.error(error?.response?.data?.error)
        throw error.response
    }
})


const JobSlice = createSlice({
    name: "JobSlice",
    initialState: {
        message: null,
        error: null,
        loading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitJobForm.pending, (state, action) => {
                state.message = ""
                state.error = ""
                state.loading = true
            })
            .addCase(submitJobForm.fulfilled, (state, action) => {
                state.message = action.message
                state.error = ""
                state.loading = false
            })
            .addCase(submitJobForm.rejected, (state, action) => {
                state.message = ""
                state.error = action.error
                state.loading = false
            })
    }
})

export default JobSlice.reducer