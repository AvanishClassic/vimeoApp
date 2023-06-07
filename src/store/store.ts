import { combineReducers, configureStore } from "@reduxjs/toolkit";
import exploreVideoReducer from "../domain/explore/exploreVideoReducer";

const reducer = combineReducers({
  exploreVideo: exploreVideoReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
