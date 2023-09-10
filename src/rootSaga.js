import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/moviesSaga";
import { peopleSaga } from "./features/peopleSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
    ]);
};