import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
};

export const exploreVideoReducer = createSlice({
  name: "exploreVideo",
  initialState,
  reducers: {
    setVideos: (state, { payload }) => {},
  },
});

export const { setVideos } = exploreVideoReducer.actions;

export default exploreVideoReducer.reducer;
