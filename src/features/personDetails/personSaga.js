import { call, put, delay, takeLatest } from "redux-saga/effects";
import {
  fetchPersonById,
  fetchPersonByIdSuccess,
  fetchPersonByIdError,
} from "./personSlice";
import { getPersonById, getPersonInMoviesByID } from "./getPersonById";

function* fetchPersonByIdHandler({ payload }) {
  try {
    const personDescription = yield call(getPersonById, payload);
    const personMovies = yield call (getPersonInMoviesByID, payload);
    const personInfo = {
      personDescription: personDescription,
      personMovies: personMovies,
    };
    yield delay(300);
    yield put(fetchPersonByIdSuccess(personInfo));
  } catch (error) {
    yield put(fetchPersonByIdError());
    yield call(alert, "An error occurred. Please try again later.");
  }
};

export function* personSaga() {
  yield takeLatest(fetchPersonById, fetchPersonByIdHandler);
};
