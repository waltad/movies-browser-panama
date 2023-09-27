import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation } from "../common/Navigation";
import MovieDetails from "../features/movieDetails/MovieDetails";
import PopularMovies from "../features/popularMovies/Content";
import PersonDetails from "../features/personDetails/Content/PersonDetails";
import PopularPeople from "../features/popularPeople/Content/people";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <PopularMovies />
          </Route>
          <Route path="/people/:id">
            <PersonDetails />
          </Route>
          <Route path="/people">
            <PopularPeople />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
