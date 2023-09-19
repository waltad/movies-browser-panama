import { takeEvery, call, put, all, delay, select, takeLatest } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, selectMovieId, setMovieDetails } from "./movieDetailsSlice";
import { getMovieDetails } from "./getMovieDetails";
import { saveMovieIdInLocalStorage } from "./movieLocalStorage";
// import { getMovieCredits } from "./getMovieCredits";

function* fetchMovieDetailsHandler() {
  try {
    yield delay(1000);
    const movieId = yield select(selectMovieId);
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

function* saveMovieIdInLocalStorageHendler() {
  const movieId = yield select(selectMovieId);
  yield call(saveMovieIdInLocalStorage, movieId);
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeEvery("*", saveMovieIdInLocalStorageHendler);
}