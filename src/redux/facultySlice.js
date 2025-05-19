import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";
import { nanoid } from "nanoid";

export const fetchFaculty = createAsyncThunk(
  "faculty/fetchFaculty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/faculty");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add new faculty
export const addFaculty = createAsyncThunk(
  "faculty/addFaculty",
  async (facultyData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/admin/faculty", facultyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update faculty
export const updateFaculty = createAsyncThunk(
  "faculty/updateFaculty",
  async ({ id, facultyData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/admin/faculty/${id}`, facultyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete faculty
export const deleteFaculty = createAsyncThunk(
  "faculty/deleteFaculty",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/admin/faculty/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const facultySlice = createSlice({
  name: "faculty",
  initialState: {
    facultyList: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaculty.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFaculty.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.facultyList = action.payload;
      })
      .addCase(fetchFaculty.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteFaculty.fulfilled, (state, action) => {
        state.facultyList = state.facultyList.filter(
          (faculty) => faculty._id !== action.payload
        );
      });
  },
});

export default facultySlice.reducer;
