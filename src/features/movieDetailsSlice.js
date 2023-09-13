import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        status: undefined,
        movieDetailsData: {},
    },
    reducers: {
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
    fetchMovieDetails,
    setMovieDetails,
    fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;
export const selectMovieDetailsStatus = state => selectMovieDetailsState(state).status;
export const selectMovieDetailsData = state => selectMovieDetailsState(state).movieDetailsData;

export default moviesSlice.reducer;