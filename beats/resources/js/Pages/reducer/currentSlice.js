import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: 0 // Valor inicial
};

export const currentSlice = createSlice({
    name: "current",
    initialState,
    reducers: {
        setCurrentSong: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { setCurrentSong } = currentSlice.actions;
export default currentSlice.reducer;
