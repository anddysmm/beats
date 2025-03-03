import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    rol: "",
    auth: false,
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state, action ) => {
            const {name,rol} = action.payload;
            state.name = name;
            state.rol = rol;
            state.auth = true;
        },
        dropUser: (state) => {
            state.name = "";
            state.rol = "";
            state.auth = false;

        }
    }
})

export const { addUser, dropUser } = userSlice.actions;
export default userSlice.reducer;