import { createSlice } from '@reduxjs/toolkit';
import {getInstance} from '../axiosInstance';

const initialState = {
  allMuseums: [],
  oneMuseum: {},
  allMuseumsLoaded: false,
  oneMuseumLoaded: false,
};

export const fetchAllMuseums = () => (dispatch) => {
  dispatch(setMuseumsNoLoaded(false));
  getInstance.get('/museums').then(({ data }) => {
    dispatch(fetchMuseums(data.museums));
  });
};

export const fetchOneMuseum = (id) => (dispatch) => {
  dispatch(setMuseumNoLoaded(false));
  getInstance.get(`/museums/${id}`).then(({ data }) => {
    dispatch(fetchMuseum(data));
  });
};

const museumSlice = createSlice({
  name: 'museum',
  initialState,
  reducers: {
    fetchMuseums: (state, { payload }) => {
      state.allMuseums = payload;
      state.allMuseumsLoaded = true;
    },
    fetchMuseum: (state, { payload }) => {
      state.oneMuseum = payload;
      state.oneMuseumLoaded = true;
    },
    setMuseumsNoLoaded: (state, { payload }) => {
      state.allMuseumsLoaded = payload;
    },
    setMuseumNoLoaded: (state, { payload }) => {
      state.oneMuseumLoaded = payload;
    },
  },
});

export default museumSlice.reducer;
export const {
  fetchMuseums,
  fetchMuseum,
  setMuseumsNoLoaded,
  setMuseumNoLoaded,
} = museumSlice.actions;
