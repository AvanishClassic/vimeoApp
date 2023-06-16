import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExploreVideoInitialState, VideoResponse } from "./explore.type";
import { getAllVideos } from "./expore.service";

const initialState: ExploreVideoInitialState = {
  loading: false,
  paidVideos: [],
  allVideos: [],
  observationalComedy: [],
  freeVideos: [],
  newReleases: [],
  viratHits: [],
  politicalStoryTelling: [],
  alternativeAbsurdistComedy: [],
  physicalPropsBasedComedy: [],
};

export const getVideos = createAsyncThunk(
  "exploreVideo/getVideos",
  async (thunkAPI) => {
    let response = await getAllVideos();
    response = response.map((item: VideoResponse) => ({
      id: item.id,
      description: item.description,
      short_description: String(item.short_description).replace(
        /^[\W_]+|[\W_]+$/g,
        ""
      ),
      name: getAuthorName(item.name),
      title: item.title,
      created_at: new Date(item.created_at).getTime(),
      is_free: item.is_free,
      image: {
        bannerImage: item?.additional_images?.aspect_ratio_16_14?.source,
        source: item.thumbnail.source,
        small: item.thumbnail.small,
        medium: item.thumbnail.medium,
      },
      video_page: item?._links.video_page?.href,
      duration: item?.duration?.seconds,
    }));
    const response_paid = response.filter(
      (videos: VideoResponse) => !videos.is_free
    );
    const response_free = response.filter(
      (videos: VideoResponse) => videos.is_free
    );

    return { response, response_paid, response_free };
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
      state.freeVideos = payload.response_free;
      state.paidVideos = payload.response_paid;
      state.allVideos = payload.response;
      state.newReleases = payload.response_paid
        .sort(
          (a: VideoResponse, b: VideoResponse) => b.created_at - a.created_at
        )
        .slice(0, 7);
      state.viratHits = payload.response_paid.filter((videos: VideoResponse) =>
        getViralHits(videos)
      );
      state.observationalComedy = payload.response_paid.filter(
        (videos: VideoResponse) => getObservationalComedy(videos)
      );
      state.politicalStoryTelling = payload.response_paid.filter(
        (videos: VideoResponse) => getPoliticalStory(videos)
      );
      state.physicalPropsBasedComedy = payload.response_paid.filter(
        (videos: VideoResponse) => getPhysicalPropsBasedComedy(videos)
      );
    });
    builder.addCase(getVideos.rejected, (state) => {
      state.loading = false;
    });
  },
});

const getAuthorName = (name: string) => {
  const getNameArr = name.split("");
  let count = 0;
  const requiredName = getNameArr.map((i) => {
    if (count != 2) {
      if (i.toLowerCase() !== i.toUpperCase()) {
        return i;
      } else {
        count++;
        return " ";
      }
    }
  });
  return requiredName.join("").trim();
};

const getPoliticalStory = (item: VideoResponse) => {
  const politicalStory = [
    "Charlie Wiener",
    "Larry Reeb",
    "Rick D",
    "Helen Keaney",
    "Kris Shaw",
    "Dean Napolitano",
    "Troy Thirdgill",
    "Paul Conyers",
  ];
  if (politicalStory.includes(String(item.name))) {
    return true;
  }
};

const getObservationalComedy = (item: VideoResponse) => {
  const observationComedy = [
    "Derek Richards",
    "Dean Napolitano",
    "Al Romas",
    "Bill",
    "Al Ernst",
    "Bob Phillips",
    "Al Romas",
  ];
  if (observationComedy.includes(String(item.name))) {
    return true;
  }
};

const getPhysicalPropsBasedComedy = (item: VideoResponse) => {
  const physicalPropsBasedComedy = [
    "Mickey Joseph",
    "Bryan Kellen",
    "Dennis Blair",
    "Flip Schultz",
  ];

  if (physicalPropsBasedComedy.includes(String(item.name))) {
    return true;
  }
};

const getViralHits = (item: VideoResponse) => {
  const viralHits = [
    "Caroline Picard",
    "Dale Jones",
    "Julie Scoggins",
    "Janet Williams",
    "Bear Webb",
    "Auggie Smith",
    "Rick Corso",
  ];

  if (viralHits.includes(String(item.name))) {
    return true;
  }
};

export const { setPaidVideos, setFreeVideos } = exploreVideoReducer.actions;

export default exploreVideoReducer.reducer;
