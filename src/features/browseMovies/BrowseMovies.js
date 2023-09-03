import { Navigation } from "../../common/Navigation";
import { MovieTitle } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { NoResults } from "../../common/States/NoResults";

const BrowseMovies = () => {
  return (
    <>
      <Navigation />
      <p>Browse Movies</p>
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
