import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("getMovies", async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88bb0c7eb3313034322082e95307079f");
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        loading: false,
        movies: [],
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.movies = [];
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload.results;
                state.error = null;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.movies = [];
                state.error = action.error.message;
            })
    }
})



export default movieSlice.reducer