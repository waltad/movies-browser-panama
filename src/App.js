import { Navigation } from "./common/Navigation";
import { Pagination } from "./common/Pagination";
import { PersonTile } from "./common/PersonTile";
import { LoadingIcon } from "./common/States/Loading";

function App() {
  return (
    <>
      <Navigation />
      <LoadingIcon />
      <PersonTile />
      <Pagination />
    </>
  );
}

export default App;
