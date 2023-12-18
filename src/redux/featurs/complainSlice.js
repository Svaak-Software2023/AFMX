import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const existingComplainCreate = createAsyncThunk(
  "complain/create",
  async ({ newData, navigate, toast }) => {
    try {
      const response = await api.existingComplainCreate(newData);
      toast.success(response.data.message);
      navigate("/");
      return response.data;
    } catch (err) {
      toast.error(err.response.data.message);
      throw err;
    }
  }
);

const complainSlice = createSlice({
  name: "complainSlice",
  initialState: {
    message: "",
    error: "",
    loading: false,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(existingComplainCreate.pending, (state) => {
        state.loading = true;
      })
      .addCase(existingComplainCreate.fulfilled, (state, action) => {
        state.loading = false;
        console.log("this is create", action.payload);
        state.message = action.payload;
      })
      .addCase(existingComplainCreate.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setMessage } = complainSlice.actions;
export default complainSlice.reducer;
