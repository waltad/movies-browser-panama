// import { MovieTile } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { NoResults } from "../../common/States/NoResults";
import PopularMovies from "../popularMovies";

const BrowseMovies = () => {
  return (
    <>
      <PopularMovies />
      <LoadingIcon />
      <NoResults />
      <ErrorMessage />
      <PersonTile />
      <Pagination />
    </>
  );
};

export default BrowseMovies;
