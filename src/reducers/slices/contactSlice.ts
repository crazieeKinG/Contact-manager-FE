import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IContact from "../../domain/IContact";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        data: [] as IContact[],
    },
    reducers: {
        setContact: (state, action: PayloadAction<IContact[]>) => {
            state.data = action.payload;
        },
    },
});

export default contactSlice.reducer;

export const { setContact } = contactSlice.actions;
