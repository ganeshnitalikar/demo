import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

// Fetch all news
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/latestnews");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add news
export const addNews = createAsyncThunk(
  "news/addNews",
  async (newsData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/admin/latestnews", newsData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update news
export const updateNews = createAsyncThunk(
  "news/updateNews",
  async ({ id, newsData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/admin/latestnews/${id}`, newsData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete news
export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/admin/latestnews/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: { news: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.news.push(action.payload);
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        const index = state.news.findIndex(
          (news) => news._id === action.payload._id
        );
        if (index !== -1) state.news[index] = action.payload;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.news = state.news.filter((news) => news._id !== action.payload);
      });
  },
});

export default newsSlice.reducer;
