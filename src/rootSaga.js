import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/moviesSaga";
import { peopleSaga } from "./features/peopleSaga";
import { personSaga } from "./features/personDetails/personSaga";
import { movieDetailsSaga } from "./features/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        personSaga(),
        movieDetailsSaga(),
    ]);
};