import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/home"


const store = configureStore({
    reducer: {
        homeReducer: homeReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
export type AppDispatch = typeof store.dispatch