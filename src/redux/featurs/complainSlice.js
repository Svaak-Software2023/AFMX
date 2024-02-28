import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

// ... (imports)

export const createExistingComplain = createAsyncThunk(
  "complain/create-existing",
  async ({ newData, navigate, toast }) => {
    try {
      const response = await api.existingComplainCreate(newData);
      toast.success(response.data.message);
      response && navigate("/");
      return response.data;
    } catch (err) {
      if (!err.response) {
        toast.error("Something Internal Server Error");
      } else {
        toast.error(err.response.data.message);
      }
      return err.response.data;
    }
  }
);

export const createNonExistingComplain = createAsyncThunk(
  "complain/create-nonexisting",
  async ({ newData, navigate, toast }) => {
    try {
      const response = await api.nonExistingComplainCreate(newData);
      toast.success(response.data.message);
      console.log("This is the existingComplain slice", newData);
      response && navigate("/");
      return response.data;
    } catch (err) {
      if (!err.response) {
        toast.error("Something Internal Server Error");
      } else {
        toast.error(err.response.data.message);
      }
      throw err;
    }
  }
);

// ... (rest of the code)


export const getComplaint = createAsyncThunk(
  "complain/get",
  async (id) => {
    try {
      console.log("This is the user ID", id)
      const response = await api.getComplaint(id);
      return response.data;
    } catch (err) {
      if (!err.response)
        toast.error("Somthing Internal Server Error");
      toast.error(err.response.data.message);
      return err.response.data;
    }
  }
);

export const createRemarks=createAsyncThunk("compalin/createRemarks",async({formData,complaintId})=>{

try{
 const response=await api.createRemarks({formData,complaintId})
 return response.data
}
catch(err){
  return err.response.data
}
})

const complainSlice = createSlice({
  name: "complainSlice",
  initialState: {
    complaints: [],
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
    [createExistingComplain.pending]: (state, action) => {
      state.loading = true
    },
    [createExistingComplain.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    [createExistingComplain.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createNonExistingComplain.pending]: (state, action) => {
      state.loading = true
    },
    [createNonExistingComplain.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    [createNonExistingComplain.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getComplaint.pending]: (state, action) => {
      state.loading = true
    },
    [getComplaint.fulfilled]: (state, action) => {
      state.loading = false;
      state.complaints = action.payload.getResponse;
      state.message = action.payload.message;
    },
    [getComplaint.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createRemarks.pending]: (state, action) => {
      state.loading = true
    },
    [createRemarks.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    [createRemarks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setMessage } = complainSlice.actions;
export default complainSlice.reducer;
