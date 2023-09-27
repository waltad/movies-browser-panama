import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "./features/popularMovies/moviesSlice";
import peopleReducer from "./features/popularPeople/peopleSlice";
import personReducer from "./features/personDetails/personSlice";
import movieDetailsReducer from "./features/movieDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    person: personReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
