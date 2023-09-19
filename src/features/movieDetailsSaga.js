import { takeEvery, call, put, all, delay, select, takeLatest } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, selectMovieId, setMovieDetails } from "./movieDetailsSlice";
import { getMovieDetails } from "./getMovieDetails";
import { saveMovieIdInLocalStorage } from "./movieLocalStorage";
// import { getGenresList } from "./getGenresList";

function* fetchMovieDetailsHandler() {
  try {
    yield delay(1000);
    const movieId = yield select(selectMovieId);
    const [movieDetails] = yield all([
      call(getMovieDetails, movieId),
      // call(getGenresList),
    ]);
    yield put(setMovieDetails(movieDetails));
    // yield put(setGenres(genres));
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