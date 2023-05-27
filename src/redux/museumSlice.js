import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';

const initialState = {
  allMuseums: [],
  oneMuseum: {},
};

export const fetchAllMuseums = () => (dispatch) => {
  axiosInstance.get('/museums').then(({ data }) => {
    dispatch(fetchMuseums(data.museums));
  });
};

export const fetchOneMuseum = (id) => (dispatch) => {
  axiosInstance.get(`/museums/${id}`).then(({ data }) => {
    dispatch(fetchMuseum(data));
  });
};

const museumSlice = createSlice({
  name: 'museum',
  initialState,
  reducers: {
    fetchMuseums: (state, { payload }) => {
      state.allMuseums = payload;
    },
    fetchMuseum: (state, { payload }) => {
      state.oneMuseum = payload;
    },
  },
});

export default museumSlice.reducer;
export const { fetchMuseums, fetchMuseum } = museumSlice.actions;
