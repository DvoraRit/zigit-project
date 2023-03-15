import {createSlice} from '@reduxjs/toolkit'


const initialAuthState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    personalDetails:JSON.parse(localStorage.getItem('user')) || {},

};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state,action) {
            state.personalDetails = action.payload.personalDetails;
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.personalDetails));
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.personalDetails = {};
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;