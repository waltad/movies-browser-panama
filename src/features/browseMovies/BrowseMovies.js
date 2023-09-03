import { MovieTitle } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { NoResults } from "../../common/States/NoResults";

const BrowseMovies = () => {
  return (
    <>
      <p>Browse Movies (NYI)</p>
      <MovieTitle />
      <LoadingIcon />
      <NoResults />
      <ErrorMessage />
      <PersonTile />
      <Pagination />
    </>
  );
};

export default BrowseMovies;
