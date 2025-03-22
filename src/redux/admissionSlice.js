import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/admissions";
const token = localStorage.getItem("token");

export const fetchAdmissions = createAsyncThunk(
  "admissions/fetch",
  async () => {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const addAdmission = createAsyncThunk("admissions/add", async (data) => {
  const response = await axios.post(API_URL, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const deleteAdmission = createAsyncThunk(
  "admissions/delete",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

const admissionSlice = createSlice({
  name: "admissions",
  initialState: { admissions: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmissions.fulfilled, (state, action) => {
        state.admissions = action.payload;
      })
      .addCase(addAdmission.fulfilled, (state, action) => {
        state.admissions.push(action.payload);
      })
      .addCase(deleteAdmission.fulfilled, (state, action) => {
        state.admissions = state.admissions.filter(
          (adm) => adm._id !== action.payload
        );
      });
  },
});

export default admissionSlice.reducer;
