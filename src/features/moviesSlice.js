import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        page: 1,
        status: undefined,
        moviesData: [],
        genres: [],
        movieId: "",
    },
    reducers: {
        nextPage: state => {
            state.page = state.page + 1;
        },
        previousPage: state => {
            state.page = state.page - 1;
        },
        setFirstPage: state => {
            state.page = 1;
        },
        setLastPage: (state, { payload: totalPages }) => {
            state.page = totalPages;
        },
        fetchPopularMovies: state => {
            state.status = "loading";
        },
        setMoviesData: (state, { payload: data }) => {
            state.moviesData = data;
            state.status = "success";
        },
        fetchPopularMoviesError: state => {
            state.status = "error";
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setMovieId: (state, { payload: id }) => {
            state.movieId = id;
        }
    },
});

export const {
    nextPage,
    previousPage,
    setFirstPage,
    setLastPage,
    fetchPopularMovies,
    setMoviesData,
    fetchPopularMoviesError,
    setGenres,
    setMovieId
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectPage = state => selectMoviesState(state).page;
export const selectStatus = state => selectMoviesState(state).status;
export const selectData = state => selectMoviesState(state).moviesData;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectMovieId = state => selectMoviesState(state).movieId;

export default moviesSlice.reducer;