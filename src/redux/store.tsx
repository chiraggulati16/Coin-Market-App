import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/home"
import authReducer from "./slices/auth"


const store = configureStore({
    reducer: {
        homeReducer: homeReducer,
        authReducer: authReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
export type AppDispatch = typeof store.dispatch