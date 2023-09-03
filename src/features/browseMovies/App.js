import { HashRouter, Route, Switch } from "react-router-dom";
import { MovieTitle } from "../../common/MovieTile";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { NoResults } from "../../common/States/NoResults";
import PopularPeople from "../popularPeople/PopularPeople";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movies">
            <MovieTitle />
            <LoadingIcon />
            <NoResults />
            <ErrorMessage />
            <PersonTile />
            <Pagination />
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
