import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import tvShowReducer from "./slices/tvShowSlice";
import actorReducer from "./slices/actorSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
        movies:movieReducer,
        tvshows: tvShowReducer,
        actors: actorReducer
    }
})


export default store