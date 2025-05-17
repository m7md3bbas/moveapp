import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTvShows = createAsyncThunk("getTvShows", async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=88bb0c7eb3313034322082e95307079f"
    );
    return response.data;
});

const tvShowSlice = createSlice({
    name: "tvshows",
    initialState: {
        loading: false,
        tvshows: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShows.pending, (state) => {
                state.loading = true;
                state.tvshows = [];
                state.error = null;
            })
            .addCase(fetchTvShows.fulfilled, (state, action) => {
                state.loading = false;
                state.tvshows = action.payload.results;
                state.error = null;
            })
            .addCase(fetchTvShows.rejected, (state, action) => {
                state.loading = false;
                state.tvshows = [];
                state.error = action.error.message;
            });
    }
});

export default tvShowSlice.reducer;
