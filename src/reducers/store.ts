import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authenticationSlice";
import contactSlice from "./slices/contactSlice";

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice,
        contacts: contactSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
