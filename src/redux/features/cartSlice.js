import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { useDispatch } from "react-redux";


export const addCart = createAsyncThunk("cart/add-cart", async (formData) => {
    try {
        const response = await api.createCart(formData);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        // console.log("error", error);
        throw error;
    }
});

export const getCart = createAsyncThunk("cart/get-cart", async ({token}) => {
    try {
        const response = await api.fetchCart(token);
        // console.log("getcart result",response);
        return response.data;
    } catch (error) {
        // console.log("getcart",error);
        throw error;
    }
});

export const deleteCartItem = createAsyncThunk("delete/CartItem", async ({ cartItemId, toast }) => {
    try {
        // console.log('..deleteCartItem',cartItemId);
        const response = await api.deleteCartItem(cartItemId);
        if (response.data) {
            toast.success(response.data.message)
        }
        return response.data
    } catch (err) {
        toast.error(response.data.error)
    }
});

export const cartItemUpdateQuantity = createAsyncThunk("/cartItems/cartItemUpdateQuantity", async ({ cartItemId, isIncrement, toast,token }) => {
    try {
        const response = await api.cartUpdateQuantity({ cartItemId, positiveAndNegativeValue: isIncrement,token });
        toast.error(response.data.error)
        return response.data
    } catch (err) {
        toast.error(err.response.data.error)
    }
});

export const addCartItems = createAsyncThunk("cart/add-item", async (formData,token) => {
    try {
        const response = await api.addCartItems(formData,token);
        return response.data;
    } catch (error) {
        // console.log("error", error);
        throw error;
    }
})

export const deleteCartItems = createAsyncThunk("cart/delete-item", async ({cartItemId,toast,token}) => {
    try {
        const response = await api.deleteCartItems(cartItemId,token);
        if (response.data) {
            toast.success(response.data.message)
        }
        return response.data;
    } catch (error) {
        console.log("error", error);
        toast.error(error.response.data.error)
        throw error;
    }
})

export const getAllSaveForLater = createAsyncThunk("cart/getToSaveLater", async ({token, toast }) => {
    try {
        const response = await api.getAllSaveForLater(token);
        return response.data;
    } catch (error) {
        // console.log("error", error);
        throw error;
    }
});

export const addAndMoveSaveLater = createAsyncThunk("cart/addAndMove/SaveLater", async ({ cartItemId, isTrue, toast ,token}) => {
    try {
        // console.log('{cartItemId, isTrue,toast}',{cartItemId, isTrue});
        const response = await api.addAndMoveSaveLater({ cartItemId, saveForLater: isTrue,token });
        if (response.data) {
            toast.success(response.data.message)
        }
        return response.data;
    } catch (error) {
        // console.log("error", error);
        throw error;
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        message: "",
        error: "",
        loading: false,
        saveForLaterData: {
            saveForlaterList: [],
            message: "",
            error: "",
            loading: false
        }
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
                state.data = []
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.data = action.payload.cartResponse
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.data = []
                state.message = "";
                state.error = action.error; // Assuming error object has a 'message' property
                state.loading = false;
            })

            .addCase(deleteCartItem.pending, (state, action) => {
                state.data = []
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.message = action.payload.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(deleteCartItem.rejected, (state, action) => {
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(addCartItems.pending, (state, action) => {
                state.data = []
                state.message = "";
                state.error = "";
                state.loading = true;
            })

            .addCase(addCartItems.fulfilled, (state, action) => {
                state.message = action.payload;
                state.error = "";
                state.loading = false;
            })
            .addCase(addCartItems.rejected, (state, action) => {
                state.data = []
                state.message = "";
                state.error = action.error; // Assuming error object has a 'message' property
                state.loading = false;
            })

            .addCase(deleteCartItems.pending, (state, action) => {
                state.message = "";
                state.error = "";
                state.loading = true;
            })

            .addCase(deleteCartItems.fulfilled, (state, action) => {
                state.message = action.payload;
                state.error = "";
                state.loading = false;
            })
            .addCase(deleteCartItems.rejected, (state, action) => {
                state.message = "";
                state.error = action.error; // Assuming error object has a 'message' property
                state.loading = false;
            })

            .addCase(cartItemUpdateQuantity.pending, (state, action) => {
                state.message = "";
                state.error = "";
                state.loading = true;
            })
            .addCase(cartItemUpdateQuantity.fulfilled, (state, action) => {
                if (action.payload) {
                    state.data.Products.map((item) => {
                        if (item.productId == action.payload?.cartItemsResponse?.productId) {
                            return { ...item.noOfProducts = action.payload?.cartItemsResponse?.noOfProducts }
                        }
                    })
                }
                state.message = action.payload?.message;
                state.error = "";
                state.loading = false;
            })
            .addCase(cartItemUpdateQuantity.rejected, (state, action) => {
                state.message = "";
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(getAllSaveForLater.pending, (state, action) => {
                state.saveForLaterData.saveForlaterList = []
                state.saveForLaterData.message = "";
                state.saveForLaterData.error = "";
                state.saveForLaterData.loading = true;
            })
            .addCase(getAllSaveForLater.fulfilled, (state, action) => {
                state.saveForLaterData.saveForlaterList = action.payload.cartResponse
                state.saveForLaterData.message = action.payload.message;
                state.saveForLaterData.error = "";
                state.saveForLaterData.loading = false;
            })
            .addCase(getAllSaveForLater.rejected, (state, action) => {
                state.saveForLaterData.saveForlaterList = []
                state.saveForLaterData.message = "";
                state.saveForLaterData.error = action.error;
                state.saveForLaterData.loading = false;
            })
            .addCase(addAndMoveSaveLater.pending, (state, action) => {
                state.saveForLaterData.saveForlaterList = []
                state.saveForLaterData.message = "";
                state.saveForLaterData.error = "";
                state.saveForLaterData.loading = true;
            })
            .addCase(addAndMoveSaveLater.fulfilled, (state, action) => {
                if (action.payload?.addToSaveForLaterResponse?.saveForLater) {
                    const index = state.data?.Products.findIndex((x) => x?.productId === action.payload?.addToSaveForLaterResponse?.productId);
                    state.data.Products.splice(index, 1);
                }

                state.saveForLaterData.saveForlaterList = action.payload.addToSaveForLaterResponse
                state.saveForLaterData.message = action.payload.message;
                state.saveForLaterData.error = "";
                state.saveForLaterData.loading = false;
            })
            .addCase(addAndMoveSaveLater.rejected, (state, action) => {
                state.saveForLaterData.saveForlaterList = []
                state.saveForLaterData.message = "";
                state.saveForLaterData.error = action.error;
                state.saveForLaterData.loading = false;
            })

    }
});

export default cartSlice.reducer;
