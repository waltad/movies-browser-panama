import { call, put, delay, takeLatest } from "redux-saga/effects";
import {
  fetchPersonById,
  fetchPersonByIdSuccess,
  fetchPersonByIdError,
} from "./personSlice";
import { getPersonById } from "./getPersonById";

function* fetchPersonByIdHandler({ payload }) {
  try {
    const personDescription = yield call(getPersonById, payload);
    const personInfo = {
      personDescription: personDescription,
    };
    yield delay(500);
    yield put(fetchPersonByIdSuccess(personInfo));
  } catch (error) {
    yield put(fetchPersonByIdError());
    yield call(alert, "An error occurred. Please try again later.");
  }
};

export function* personSaga() {
  yield takeLatest(fetchPersonById, fetchPersonByIdHandler);
};
