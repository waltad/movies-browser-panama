import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/popularMovies/moviesSaga";
import { peopleSaga } from "./features/popularPeople/peopleSaga";
import { personSaga } from "./features/personDetails/personSaga";
import { movieDetailsSaga } from "./features/movieDetails/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        personSaga(),
        movieDetailsSaga(),
    ]);
};