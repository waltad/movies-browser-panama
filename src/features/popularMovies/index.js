import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  selectStatus,
  selectData,
  selectGenres
} from "../moviesSlice";
import { MovieTile } from "../../common/MovieTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { MovieList, StyledNavLink, Title, Wrapped } from "./styled";
import { fetchPopularMovies } from "../moviesSlice";
import { Pagination } from "../../common/Pagination";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const status = useSelector(selectStatus);
  const popularMovies = useSelector(selectData);
  const genres = useSelector(selectGenres);

  useEffect(() => {
    if (location.includes("movie")) dispatch(fetchPopularMovies());
  }, []);

  if (status === "error") {
    return <ErrorMessage />;
  }

  if (status === "loading") {
    return <LoadingIcon />;
  }

  if (status === "success") {
    return (
      <>
        <Wrapped>
          <Title>Popular Movies</Title>
          <MovieList>
            {popularMovies.map((movie) => (
              <StyledNavLink key={`${movie.id}`} to="/movieDetails">
                <MovieTile
                  poster_path={movie.poster_path}
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  vote_count={movie.vote_count}
                  genre_ids={(movie.genre_ids).slice(0, 2)}
                  id={movie.id}
                />
              </StyledNavLink>
            ))}
          </MovieList>
        </Wrapped>
        <Pagination />
      </>
    );
  }
};

export default PopularMovies;
