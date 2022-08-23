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
        updateContact: (state, action: PayloadAction<IContact>) => {
            console.log(state.data);

            state.data.forEach((data, index) => {
                if (state.data[index].id === action.payload.id) {
                    state.data[index] = action.payload;
                }
            });
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(
                (value) => value.id !== action.payload
            );
        },
    },
});

export default contactSlice.reducer;

export const { setContact, updateContact, deleteContact } =
    contactSlice.actions;
