import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const readUsers = createAsyncThunk("getUserDetails", async () => {
  try {
    const response = await axios.get("/api/getUserDetails");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    userDetails: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(readUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
      console.log(action.payload);
    });
    builder.addCase(readUsers.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
