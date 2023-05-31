import { createSlice } from '@reduxjs/toolkit';
import { useTokenInstance } from '../axiosInstance';

const initialState = {
  user: {
    id: null,
    name: '',
    email: '',
    role: '',
  },
  isAuth: false,
  token: '',
};

const setToken = (token) => localStorage.setItem('jwtToken', `${token}`);

export const checkIsAuth = () => (dispatch) => {
  useTokenInstance(localStorage.getItem('jwtToken'))
    .get('/auth/user')
    .then(({ data }) => {
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
      setToken(payload.accessToken);
      state.token = payload.accessToken;
      state.isAuth = true;
    },
    setIsAuth: (state, { payload }) => {
      state.user = {
        id: payload.id,
        name: payload.nickname,
        email: payload.email,
        role: payload.role[payload.role.length - 1],
      };
      state.token = localStorage.getItem('jwtToken');
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = {};
      state.token = '';
      localStorage.removeItem('jwtToken');
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
export const { loginSuccess, logout, setIsAuth } = userSlice.actions;
