import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListNewsFetch } from "../services/news";

export const getListNews = createAsyncThunk("NEWS/SET_LIST_NEWS", async () => {
  try {
    const request = await getListNewsFetch();
    return request;
  } catch {}
});

const newsReducer = createSlice({
  name: "News",
  initialState: { newsList: [], isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListNews.fulfilled, (state, actions) => {
      state.newsList = actions.payload.articles;
      state.isLoading = false;
    });

    builder.addMatcher(
      (action) => action.type.endsWith("pending"),
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("rejected"),
      (state, action) => {
        state.isLoading = false;
      }
    );
  },
});

const { actions, reducer } = newsReducer;

export const {} = actions;

export default reducer;
