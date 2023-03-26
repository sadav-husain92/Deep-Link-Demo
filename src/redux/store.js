import { configureStore } from '@reduxjs/toolkit';
import { combinedReducer } from './slices';

export const store = configureStore({
    reducer: combinedReducer,
});
