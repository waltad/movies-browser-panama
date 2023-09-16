import { takeEvery, call, put, all, delay } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, setMovieDetails } from "./movieDetailsSlice";
import { getMovieDetails } from "./getMovieDetails";
// import { getGenresList } from "./getGenresList";

function* fetchMovieDetailsHandler() {
  try {
    yield delay(1000);
    const [movieDetails] = yield all([
      call(getMovieDetails),
      // call(getGenresList),
    ]);
    yield put(setMovieDetails(movieDetails));
    // yield put(setGenres(genres));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
}