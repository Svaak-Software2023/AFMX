import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const existingComplainCreate = createAsyncThunk(
  "complain/create",
  async ({ newData, navigate, toast }) => {
    try {
      const response = await api.existingComplainCreate(newData);
      
      toast.success(response.data.message);
      response&&navigate("/");
      return response.data;
    } catch (err) {
      if(!err.response)
      toast.error("Somthing Internal Server Error");

      toast.error(err.response.data.message);
      throw err;
    }
  }
);

export const nonExistingComplainCreate = createAsyncThunk(
  "complain/create",
  async ({ newData, navigate, toast }) => {
    try {
      const response = await api.nonExistingComplainCreate(newData);
      toast.success(response.data.message);
      console.log("This is the existingComplain slice", newData);
      response&&navigate("/");
      return response.data;
    } catch (err) {
      if(!err.response)
      toast.error("Somthing Internal Server Error");
    
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
  extraReducers: {
    [existingComplainCreate.pending]: (state, action) => {
      state.loading = true
    },
    [existingComplainCreate.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("this is create", action.payload);
      state.message = action.payload;
    },
    [existingComplainCreate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [nonExistingComplainCreate.pending]: (state, action) => {
      state.loading = true
    },
    [nonExistingComplainCreate.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("this is create", action.payload);
      state.message = action.payload;
    },
    [nonExistingComplainCreate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setMessage } = complainSlice.actions;
export default complainSlice.reducer;
