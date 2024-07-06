import { AuthState } from ".";
import { HomeState } from "./reducerState/HomeState";
import { NewsState } from "./reducerState/NewsState";

interface State {
    homeReducer : HomeState,
    authReducer : AuthState,
    newsReducer : NewsState
}

export type {State};