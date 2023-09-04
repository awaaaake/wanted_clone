import { configureStore, createSlice } from '@reduxjs/toolkit'
import userEvent from '@testing-library/user-event'

let auth = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },

        logout(state){
            state.isLoggedIn = false;
        },

        updateuser(state, action){//�Ķ���� �ʿ�
            state.user = action.payload;
        }
    }
});

export let {login, logout, updateuser} = auth.actions;

export default configureStore({
    reducer: {
        //state���
        auth: auth.reducer
    }
})