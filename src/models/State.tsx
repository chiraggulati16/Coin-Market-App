import { AuthState } from ".";
import { HomeState } from "./reducerState/HomeState";

interface State {
    homeReducer : HomeState,
    authReducer : AuthState
}

export type {State};