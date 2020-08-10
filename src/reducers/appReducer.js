import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const appReducer = createSlice({
  name: "App",
  initialState,
  reducers: {
    fetchingStarted: (state, action) => {
      state.isLoading = true;
    },
    fetchingStopped: (state, action) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = appReducer;

export const { fetchingStarted, fetchingStopped } = actions;

export default reducer;
