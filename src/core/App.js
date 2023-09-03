import { HashRouter, Link, Route, Switch } from "react-router-dom";
import PopularPeople from "../features/popularPeople/PopularPeople";
import BrowseMovies from "../features/browseMovies/BrowseMovies";

function App() {
  return (
    <>
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to="/movies">Browse Movies</Link>
            </li>
            <li>
              <Link to="/people">Popular People</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/movies">
              <BrowseMovies />
            </Route>
            <Route path="/people">
              <PopularPeople />
            </Route>
          </Switch>
        </nav>
      </HashRouter>
    </>
  );
}

export default App;
