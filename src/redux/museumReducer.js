import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  museums: [],
  oneMuseum: {},
};

export const fetchAllMuseums = createAction('FETCH_ALL_MUSEUMS');

export default createReducer(initialState, {
  [fetchAllMuseums]: async function (state) {
    try {
      const response = await axios.get('http://localhost:8080/museums');
      const museums = response.data.museums;
      console.log(response.data.museums);
      // Update the state with the fetched museums
      state.museums = museums;
    } catch (error) {
      // Handle the error if needed
      console.error('Failed to fetch museums:', error);
    }
  },
});
