import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: {
        count: 0
    },
    reducers: {
        plus: (state) => {
            state.count += 1
        },
        minus: (state) => {
            state.count -= 1
        }
    }
});

export const { plus, minus } = countSlice.actions;

export const selectCount = (state) => state.count.count;

export default countSlice.reducer;