import { takeEvery, call, put, throttle } from "redux-saga/effects";
import { fetchPopularMovies, fetchPopularMoviesError, setGenres, setMoviesData } from "./moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenresList } from "./getGenresList";

function* fetchPopularMoviesHandler() {
    try {
        yield throttle(1000);
        const popularMovies = yield call(getPopularMovies);
        const genres = yield call(getGenresList);
        // const moviesData = yield call(getMoviesData);
        // const genres = yield call(getGenres);
        // yield put(setGenres(genres));
        yield put(setMoviesData(popularMovies.results));
        yield put(setGenres(genres.genres));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
}