import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { getPeople } from "./getPeople";

function* fetchPeopleHandler({ payload }) {
  try {
    const peopleList = yield call(getPeople, payload);
    yield delay(1000);
    yield put(fetchPeopleSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleError());
    yield call(alert, "Download error! Please try again later or check your internet connection.");
  }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople, fetchPeopleHandler);
};