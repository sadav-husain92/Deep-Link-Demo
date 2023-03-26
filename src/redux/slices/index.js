import { combineReducers } from 'redux';
import homeSlice from './homeSlice';

export const combinedReducer = combineReducers({
    homeSlice,
});
