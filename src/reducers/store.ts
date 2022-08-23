import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authenticationSlice";
import contactSlice from "./slices/contactSlice";
import dataManageSlice from "./slices/dataManageSlice";

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice,
        contacts: contactSlice,
        dataManage: dataManageSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
