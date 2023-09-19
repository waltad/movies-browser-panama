import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        movieId: "",
        status: undefined,
        movieDetailsData: {},
    },
    reducers: {
        setMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
        fetchMovieDetails: state => {
            state.status = "loading";
        },
        setMovieDetails: (state, { payload: data }) => {
            state.movieDetailsData = data;
            state.status = "success";
        },
        fetchMovieDetailsError: state => {
            state.status = "error";
        },
    },
});

export const {
    setMovieId,
    fetchMovieDetails,
    setMovieDetails,
    fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;
export const selectMovieId = state => selectMovieDetailsState(state).movieId;
export const selectMovieDetailsStatus = state => selectMovieDetailsState(state).status;
export const selectMovieDetailsData = state => selectMovieDetailsState(state).movieDetailsData;

export default movieDetailsSlice.reducer;