import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAuthentication from "../../domain/IAuthentication";

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        data: {
            username: localStorage.getItem("username") as string,
            token: localStorage.getItem("token") as string,
        },
    },
    reducers: {
        logIn: (state, action: PayloadAction<IAuthentication>) => {
            state.data.token = action.payload.accessToken;
            state.data.username = action.payload.username;
            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("token", action.payload.accessToken);
        },
        logOut: (state) => {
            state.data.token = "";
            state.data.username = "";
            localStorage.removeItem("token");
            localStorage.removeItem("username");
        },
    },
});

export default authenticationSlice.reducer;
export const { logIn, logOut } = authenticationSlice.actions;
