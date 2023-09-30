import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: undefined,
    movieDetailsData: {},
    movieCreditsData: {},
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    setMovieDetails: (state, { payload: data }) => {
      state.movieDetailsData = data;
      state.status = "success";
    },
    setMovieCredits: (state, { payload: data }) => {
      state.movieCreditsData = data;
      state.status = "success";
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovieDetails,
  setMovieDetails,
  setMovieCredits,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieDetailsState(state).movieId;
export const selectMovieDetailsStatus = (state) =>
  selectMovieDetailsState(state).status;
export const selectMovieDetailsData = (state) =>
  selectMovieDetailsState(state).movieDetailsData;
export const selectMovieCreditsData = (state) =>
  selectMovieDetailsState(state).movieCreditsData;

export default movieDetailsSlice.reducer;
