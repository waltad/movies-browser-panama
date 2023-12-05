import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchSearchPeople,
} from "./peopleSlice";
import { getPeople } from "./getPeople";
import { getSearchResults } from "../../common/Navigation/Search/getSearchResults";

function* fetchPeopleHandler({ payload }) {
  try {
    const peopleList = yield call(getPeople, payload);
    yield delay(600);
    yield put(fetchPeopleSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleError());
    yield call(
      alert,
      "Download error! Please try again later or check your internet connection."
    );
  }
}

function* fetchSearchPeopleHandler({ payload: options }) {
  try {
    yield delay(600);
    const peopleList = yield call(
      getSearchResults,
      options.query,
      options.page,
      options.type
    );
    yield put(fetchPeopleSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchSearchPeople.type, fetchSearchPeopleHandler);
}
