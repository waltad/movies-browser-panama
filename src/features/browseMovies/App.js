import { HashRouter, Link, Route, Switch } from "react-router-dom";
import { MovieTitle } from "../../common/MovieTile";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { NoResults } from "../../common/States/NoResults";
import MovieDetails from "../movieDetails/MovieDetails";
import PersonDetails from "../personDetails/PersonDetails";
import PopularPeople from "../popularPeople/PopularPeople";

function App() {
  return (
    <>
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home">Browse Movies</Link>
            </li>
            <li>
              <Link to="/mDetails">Movie Details</Link>
            </li>
            <li>
              <Link to="/pDetails">Person Details</Link>
            </li>
            <li>
              <Link to="/popular">Popular People</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/home">
              <Navigation />
              <MovieTitle />
              <LoadingIcon />
              <NoResults />
              <ErrorMessage />
              <PersonTile />
              <Pagination />
            </Route>
            <Route path="/mDetails">
              <MovieDetails />
            </Route>
            <Route path="/pDetails">
              <PersonDetails />
            </Route>
            <Route path="/popular">
              <PopularPeople />
            </Route>
          </Switch>
        </nav>
      </HashRouter>
    </>
  );
}

export default App;
