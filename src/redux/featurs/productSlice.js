import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getProduct = createAsyncThunk("/product", async (id) => {
    try {
        console.log("id",id)
        const response = await api.getProduct(id)
        // console.log(response.data);
        return response.data
    } catch (err) {
        // console.log(err);
        return err.response.data
    }
});

export const getSingleProduct = createAsyncThunk("/single-product", async (id) => {
    try {
        const response = await api.getSingleProduct(id)
        console.log(response.data);
        return response.data
    } catch (err) {
        console.log(err);
        return err.response.data
    }
});

export const getAllCategory = createAsyncThunk("/allCategory", async () => {
    try {
        const response = await api.allProductCategory()
        console.log(response.data);
        return response.data
    } catch (err) {
       return err.response.data
    }
});

const productSlice = createSlice({
    name: "Product",
    initialState: {
        allProducts: [],
        singleProduct: {},
        allCategory:{message:"",data:[]},
        error: "",
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getProduct.pending]:(state,action)=>{
            state.loading=true
        },
        [getProduct.fulfilled]:(state,action)=>{
            state.loading=false
            state.allProducts=action.payload?.productResponse
        },
        [getProduct.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        [getSingleProduct.pending]:(state,action)=>{
            state.loading=true
        },
        [getSingleProduct.fulfilled]:(state,action)=>{
            state.loading=false
            state.singleProduct=action.payload?.productSingleResponse
        },
        [getSingleProduct.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        [getAllCategory.pending]:(state,action)=>{
            state.loading=true
        },
        [getAllCategory.fulfilled]:(state,action)=>{
            state.loading=false
            state.allCategory.message=action.payload.message
            state.allCategory.data=action.payload.productCategoryResponse
        },
        [getAllCategory.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },

    }
})

export default productSlice.reducer