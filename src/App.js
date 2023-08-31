import { Navigation } from "./common/Navigation";
import { Pagination } from "./common/Pagination";
import { PersonTile } from "./common/PersonTile";
import { LoadingIcon } from "./common/States/Loading";
import { NoResults } from "./common/States/NoResults";

function App() {
  return (
    <>
      <Navigation />
      <LoadingIcon />
      <NoResults />
      <PersonTile />
      <Pagination />
    </>
  );
}

export default App;
