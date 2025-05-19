import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

// Fetch all non-teaching staff
export const fetchNonTeachingStaff = createAsyncThunk(
  "nonTeachingStaff/fetchNonTeachingStaff",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/nonteachingstaff");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add new staff member
export const addNonTeachingStaff = createAsyncThunk(
  "nonTeachingStaff/addNonTeachingStaff",
  async (staffData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/admin/nonteachingstaff", staffData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update staff member
export const updateNonTeachingStaff = createAsyncThunk(
  "nonTeachingStaff/updateNonTeachingStaff",
  async ({ id, staffData }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/api/admin/nonteachingstaff/${id}`,
        staffData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete staff member
export const deleteNonTeachingStaff = createAsyncThunk(
  "nonTeachingStaff/deleteNonTeachingStaff",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/admin/nonteachingstaff/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const nonTeachingSlice = createSlice({
  name: "nonTeaching",
  initialState: {
    nonTeachingList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNonTeachingStaff.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNonTeachingStaff.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nonTeachingList = action.payload;
      })
      .addCase(fetchNonTeachingStaff.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteNonTeachingStaff.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteNonTeachingStaff.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nonTeachingList = state.nonTeachingList.filter(
          (staff) => staff._id !== action.payload
        );
      })
      .addCase(deleteNonTeachingStaff.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default nonTeachingSlice.reducer;
