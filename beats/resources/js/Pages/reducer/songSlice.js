// En tu slice (songSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {
        addSong: (state, action) => {
            // Agregar todas las canciones del array al estado songs
            state.push(...action.payload);
        },
        // Agregar más reducers según sea necesario, por ejemplo, para eliminar una canción, actualizar una canción, etc.
        resetSongs: () => initialState,
    }
});

export const { addSong , resetSongs } = songSlice.actions;
export default songSlice.reducer;