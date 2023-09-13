import { takeEvery, call, put, all, delay, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, fetchError, setGenres, setMoviesData, fetchSearchMovies } from "./moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenresList } from "./getGenresList";
import { getSearchResults } from "../common/Navigation/Search/getSearchResults";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(1000);
        const [popularMovies, genres] = yield all([
            call(getPopularMovies),
            call(getGenresList),
        ]);
        yield put(setMoviesData(popularMovies));
        yield put(setGenres(genres));
    } catch (error) {
        yield put(fetchError());
    }
}

function* fetchSearchMoviesHandler({ payload: options }) {
    try {
        yield delay(1000);
        const [popularMovies, genres] = yield all([
            call(getSearchResults, options.query, options.page),
            call(getGenresList),
        ]);
        yield put(setMoviesData(popularMovies));
        yield put(setGenres(genres));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchSearchMovies.type, fetchSearchMoviesHandler);
}