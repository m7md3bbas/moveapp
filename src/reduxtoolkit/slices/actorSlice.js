import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchActors = createAsyncThunk("getActors", async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/person/popular?api_key=88bb0c7eb3313034322082e95307079f"
    );
    return response.data;
});

const actorSlice = createSlice({
    name: "actors",
    initialState: {
        loading: false,
        actors: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActors.pending, (state) => {
                state.loading = true;
                state.actors = [];
                state.error = null;
            })
            .addCase(fetchActors.fulfilled, (state, action) => {
                state.loading = false;
                state.actors = action.payload.results;  
                state.error = null;
            })
            .addCase(fetchActors.rejected, (state, action) => {
                state.loading = false;
                state.actors = [];
                state.error = action.error.message;
            });
    }
});

export default actorSlice.reducer;
