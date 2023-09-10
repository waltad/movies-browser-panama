import { takeEvery, call, put, all, throttle, delay } from "redux-saga/effects";
import { fetchPopularMovies, fetchPopularMoviesError, setGenres, setMoviesData } from "./moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenresList } from "./getGenresList";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(1000);
        const [ popularMovies, genres ] = yield all ([
            call(getPopularMovies),
            call(getGenresList),
        ]);
        yield put(setMoviesData(popularMovies));
        yield put(setGenres(genres));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
}