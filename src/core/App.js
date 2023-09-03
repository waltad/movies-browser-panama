import { HashRouter, Route, Switch } from "react-router-dom";
import PopularPeople from "../features/popularPeople/PopularPeople";
import BrowseMovies from "../features/browseMovies/BrowseMovies";
import { Navigation } from "../common/Navigation";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movies">
            <BrowseMovies />
          </Route>
          <Route path="/people">
            <PopularPeople />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
