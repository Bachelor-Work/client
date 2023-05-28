import { createSlice } from '@reduxjs/toolkit';

import { getTockenInstance, postTockenInstance } from '../axiosInstance';

const initialState = {
  managerRequests: [],
};

export const fetchAllManagerRequests = () => (dispatch) => {
  getTockenInstance.get('/admin').then(({ data }) => {
    dispatch(setManagerRequests(data));
  });
};

export const giveAccess = (id) => (dispatch) => {
  postTockenInstance.post(`/admin/allow/${id}`).then(({ data }) => {
    dispatch(setAccess(id));
  });
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setManagerRequests: (state, { payload }) => {
      state.managerRequests = payload;
    },
    setAccess: (state, { payload }) => {
      state.managerRequests = state.managerRequests.map((user) => {
        if (user.user_id === payload) {
          return { ...user, status: true };
        }
        return user;
      });
    },
  },
});

export default adminSlice.reducer;
export const { setManagerRequests, setAccess } = adminSlice.actions;
