import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songs/songsSlice";
import uploadReducer from "./upload/uploadSlice";

export const store = configureStore({
    reducer: {
        songs: songsReducer,
        upload: uploadReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;