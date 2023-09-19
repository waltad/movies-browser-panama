import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        status: undefined,
        moviesData: [],
        genres: [],
    },
    reducers: {
        fetchPopularMovies: state => {
            state.status = "loading";
        },
        setMoviesData: (state, { payload: data }) => {
            state.moviesData = data;
            state.status = "success";
        },
        fetchError: state => {
            state.status = "error";
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        fetchSearchMovies: state => {
            state.status = "loading";
        },
    },
});

export const {
    fetchPopularMovies,
    setMoviesData,
    setMovieId,
    fetchError,
    setGenres,
    fetchSearchMovies
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectStatus = state => selectMoviesState(state).status;
export const selectData = state => selectMoviesState(state).moviesData;
export const selectGenres = state => selectMoviesState(state).genres;

export default moviesSlice.reducer;