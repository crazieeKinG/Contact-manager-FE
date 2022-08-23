import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IContact from "../../domain/IContact";

const dataManageSlice = createSlice({
    name: "data management",
    initialState: {
        refresh: true,
        selectedContact: null as IContact | null,
    },
    reducers: {
        setRefresh: (state, action: PayloadAction<boolean>) => {
            state.refresh = action.payload;
        },
        setSelectedContact: (state, action: PayloadAction<IContact | null>) => {
            state.selectedContact = action.payload;
        },
    },
});

export default dataManageSlice.reducer;

export const { setRefresh, setSelectedContact } = dataManageSlice.actions;
