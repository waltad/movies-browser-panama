import { call, put, all, delay, takeLatest } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, setMovieDetails } from "./movieDetailsSlice";
import { getMovieDetails } from "./getMovieDetails";

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield delay(1000);
    const [movieDetails] = yield all([
      call(getMovieDetails, movieId),
      // call(getMovieCredits, movieId),
    ]);
    yield put(setMovieDetails(movieDetails));
    // yield put(setMovieCredits(movieCredits));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}