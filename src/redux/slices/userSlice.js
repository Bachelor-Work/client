import { createSlice } from '@reduxjs/toolkit';
import { getTockenInstance } from '../axiosInstance';

const initialState = {
  user: {
    id: null,
    name: '',
    email: '',
    role: '',
  },
  isAuth: false,
};

const setToken = (type, token) => {
  localStorage.setItem('jwtToken', `${type}${token}`);
};

export const checkIsAuth = () => (dispatch) => {
  getTockenInstance.get('/auth/user').then(({ data }) => {
    dispatch(setIsAuth(data));
  });
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.user = {
        id: payload.id,
        name: payload.nickname,
        email: payload.email,
        role: payload.role[payload.role.length - 1],
      };
      setToken(payload.tokenType, payload.accessToken);
      state.isAuth = true;
    },
    setIsAuth: (state, { payload }) => {
      state.user = {
        id: payload.id,
        name: payload.nickname,
        email: payload.email,
        role: payload.role[payload.role.length - 1],
      };
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = {};
      localStorage.removeItem('jwtToken');
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
export const { loginSuccess, logout, setIsAuth } = userSlice.actions;
