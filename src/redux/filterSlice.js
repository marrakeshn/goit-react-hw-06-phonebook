import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = {
  filter: '',
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilters,

  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload.toLowerCase();
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const getFilter = state => state.filter.filter;
export default filtersSlice.reducer
