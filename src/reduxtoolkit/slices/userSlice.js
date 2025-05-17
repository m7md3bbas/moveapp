import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("getUsers", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        users: [],
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.users = [];
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            })
    }
})



export default userSlice.reducer