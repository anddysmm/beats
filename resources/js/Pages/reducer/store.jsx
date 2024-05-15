import { configureStore } from '@reduxjs/toolkit';
import songReducer from './songSlice';
import userReducer from './userSlice';
import currentReducer from './currentSlice';

export const store = configureStore({
  reducer : {
    song: songReducer,
    current: currentReducer,
    user: userReducer,
  }
});