import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllVideos } from "./expore.service";

const initialState: any = {
  loading: false,
  paidVideos: [],
  allVideos: [],
  freeVideos: [],
};

export const getVideos: any = createAsyncThunk(
  "exploreVideo/getVideos",
  async (thunkAPI) => {
    let res = await getAllVideos();
    res = res.map((item: any) => ({
      id: item.id,
      description: item.description,
      short_description: String(item.short_description).replace(
        /^[\W_]+|[\W_]+$/g,
        ""
      ),
      title: item.title,
      is_free: item.is_free,
      image: {
        source: item.thumbnail.source,
        small: item.thumbnail.small,
        medium: item.thumbnail.medium,
      },
      video_page: item?._links.video_page?.href,
      duration: item?.duration?.seconds,
    }));

    return res;
  }
);

export const exploreVideoReducer = createSlice({
  name: "exploreVideo",
  initialState,
  reducers: {
    setPaidVideos: (state, { payload }) => {
      return { ...state, paidVideos: [...state.paidVideos, payload] };
    },
    setFreeVideos: (state, { payload }) => {
      return { ...state, freeVideos: [...state.freeVideos, payload] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, { payload }) => {
      state.loading = false;
      // payload.map((videos: any) => {
      //   if (videos.is_free) {
      //     state.freeVideos = payload;
      //   } else {
      //     state.paidVideo = payload;
      //   }
      // });
      state.freeVideos = payload.filter((videos: any) => videos.is_free);
      state.paidVideos = payload.filter((videos: any) => !videos.is_free);
      state.allVideos = payload;
    });
    builder.addCase(getVideos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setPaidVideos, setFreeVideos } = exploreVideoReducer.actions;

export default exploreVideoReducer.reducer;
