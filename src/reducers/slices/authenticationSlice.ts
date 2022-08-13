import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        data: {
            token: localStorage.getItem("token"),
        },
    },
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            state.data.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        logOut: (state) => {
            state.data.token = null;
            localStorage.removeItem("token");
        },
    },
});

export default authenticationSlice.reducer;
export const { logIn, logOut } = authenticationSlice.actions;
