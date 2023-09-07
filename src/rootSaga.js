import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/moviesSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
};