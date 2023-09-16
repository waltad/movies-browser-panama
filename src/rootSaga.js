import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/moviesSaga";
import { peopleSaga } from "./features/peopleSaga";
import { movieDetailsSaga } from "./features/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        movieDetailsSaga(),
    ]);
};