import { takeEvery, call, put, throttle } from "redux-saga/effects";
import { fetchPopularMovies, fetchPopularMoviesError, setGenres, setMoviesData } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield throttle(1000);
        // const moviesData = yield call(getMoviesData);
        // const genres = yield call(getGenres);
        // yield put(setGenres(genres));
        // yield put(setMoviesData(moviesData));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
}