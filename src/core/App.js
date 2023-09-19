import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PopularPeople from "../features/popularPeople/Content/people";
import BrowseMovies from "../features/browseMovies/BrowseMovies";
import PersonDetails from "../features/personDetails/PersonDetails";
import { Navigation } from "../common/Navigation";
import MovieDetails from "../features/movieDetails/MovieDetails";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movies">
            <BrowseMovies />
          </Route>
          <Route path="/movieDetails/:id">
            <MovieDetails />
          </Route>
          <Route path="/people">
            <PopularPeople />
          </Route>
          <Route path="/personDetails">
            <PersonDetails />
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
