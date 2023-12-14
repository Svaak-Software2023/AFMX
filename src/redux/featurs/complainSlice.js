import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const complainCreate = createAsyncThunk("complain/create", async({ data, navigate, toast }) => {
    try {
        const response =await api.createComplain(data)
            .then(() => {
                toast.success("Complain has been created");
                navigate("/")
            })
            .catch((data) => {
                console.log("this is the response message", data.response)
                toast.error(response.data.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                })

            })
    }
    catch (err) {
        console.log(err);
    }
})
const complainSlice = createSlice({
    name: "complainSlice",
    initialState: {
        message: "", 
        error: "",
        loading: false
    },
    reducers: {
        setMessage: (state, payload) => {
            state.message = action.payload
        }
    },
    extraReducers: {
        [complainCreate.pending]: (state) => {
            state.loading = true
        },
        [complainCreate.fulfilled]: (state, action) => {
            state.loading = false,
                console.log(action, "this is createsd");
            state.message = action.payload
        },
        [complainCreate.rejected]: (state) => {
            state.loading = false
        }
    }
});
export const { setMessage } = complainSlice.actions
export default complainSlice.reducer;