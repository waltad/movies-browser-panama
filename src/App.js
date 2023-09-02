import { MovieTitle } from "./common/MovieTile";
import { Navigation } from "./common/Navigation";
import { Pagination } from "./common/Pagination";
import { PersonTile } from "./common/PersonTile";
import { ErrorMessage } from "./common/States/Error";
import { LoadingIcon } from "./common/States/Loading";
import { NoResults } from "./common/States/NoResults";

function App() {
  return (
    <>
      <Navigation />
      <MovieTitle />
      <LoadingIcon />
      <NoResults />
      <ErrorMessage />
      <PersonTile />
      <Pagination />
    </>
  );
}

export default App;
