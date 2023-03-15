
import {configureStore} from '@reduxjs/toolkit'
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './Auth-Slice';

//I developed the reducer by combineReducers in case I will add more reducers in the future
const rootReducer = combineReducers({
  auth: authReducer,
});


const store = configureStore({
    reducer: rootReducer,
    middleware: [createSerializableStateInvariantMiddleware()],
});

export default store;