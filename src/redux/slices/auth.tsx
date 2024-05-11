import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../models';


export const initialState : AuthState = {
    userData: null
};

const authSlice = createSlice({
  initialState: initialState,
  name: 'Auth',
  reducers: {
    setUserData: (state, action) => {
      state.userData = action?.payload;
    },
  },
});

export const {setUserData} = authSlice.actions;
export default authSlice.reducer;
