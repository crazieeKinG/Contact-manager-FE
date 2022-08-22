import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IContact, { IContactToInsert } from "../../domain/IContact";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        data: [
            {
                id: 1,
                name: "Saajan Shrestha",
                phone: 98510075,
                favourite: false,
            },
            {
                id: 2,
                name: "Amish SHrestha",
                phone: 985100675,
                favourite: true,
            },
            {
                id: 3,
                name: "John Brown",
                phone: 985106475,
                favourite: true,
            },
            {
                id: 4,
                name: "Sagar Thapa",
                phone: 9851006475,
                favourite: false,
            },
            {
                id: 5,
                name: "Ujjwal Khanal",
                phone: 95100675,
                favourite: true,
            },
        ] as IContact[],
    },
    reducers: {
        addContact: (state, action: PayloadAction<IContactToInsert>) => {
            state.data.push({ ...action.payload, id: 5 });
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

export const { addContact, updateContact, deleteContact } =
    contactSlice.actions;
