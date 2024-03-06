import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addCart = createAsyncThunk("cart/add-cart", async (formData) => {
    try {
        const response = await api.createCart(formData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("error",error);
        throw error;
    }
});

export const getCart = createAsyncThunk("cart/get-cart", async (formData) => {
    console.log(formData,"formData");
    try {
        const response = await api.getCart(formData);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data:[],
        message: "",
        error: "",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCart.pending, (state, action) => {
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.message = action.payload;
                state.error = "";
                state.loading = false;
            })
            .addCase(addCart.rejected, (state, action) => {
                state.message = "";
                state.error = action.error.message; // Assuming error object has a 'message' property
                state.loading = false;
            })
            .addCase(getCart.pending, (state, action) => {
                state.data=[]
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.data=action.payload.cartResponse
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.data=[]
                state.message = "";
                state.error = action.error.message; // Assuming error object has a 'message' property
                state.loading = false;
            });
    }
});

export default cartSlice.reducer;
