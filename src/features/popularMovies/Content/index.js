import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectStatus, selectData, fetchSearchMovies } from "../moviesSlice";
import { MovieTile } from "../../../common/MovieTile";
import { ErrorMessage } from "../../../common/States/Error";
import { LoadingIcon } from "../../../common/States/Loading";
import { MovieList, StyledNavLink, Title, Wrapped } from "./styled";
import { fetchPopularMovies } from "../moviesSlice";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameter } from "../../../common/Navigation/queryParameters";
import searchQueryParamName from "../../../common/Navigation/searchQueryParamName";
import { NoResults } from "../../../common/States/NoResults";
import paginationParamName from "../../../common/Pagination/paginationParamName";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);
  const popularMovies = data.results || [];
  const query = useQueryParameter(searchQueryParamName);
  const totalResults = data.total_results;
  const page = useQueryParameter(paginationParamName) || 1;

  useEffect(() => {
    const options = {
      query: query,
      page: page,
      type: "movie",
    };

    if (query) {
      dispatch(fetchSearchMovies(options));
    } else {
      dispatch(fetchPopularMovies(page));
    }
  }, [page, dispatch, query]);

  switch (status) {
    case "error":
      return <ErrorMessage />;
    case "loading":
      return query ? (
        <Wrapped>
          <Title>Search results for "{query}"</Title>
          <LoadingIcon />
        </Wrapped>
      ) : (
        <LoadingIcon />
      );
    case "success":
      if (!popularMovies.length && query) {
        return (
          <Wrapped>
            <Title>Sorry, there are no results for "{query}"</Title>
            <NoResults />
          </Wrapped>
        );
      } else if (query) {
        return (
          <>
            <Wrapped>
              <Title>{`Search results for "${query}" (${totalResults})`}</Title>
              <MovieList>
                {popularMovies.map((movie) => (
                  <StyledNavLink key={`${movie.id}`} to={`/movies/${movie.id}`}>
                    <MovieTile
                      poster_path={movie.poster_path}
                      title={movie.title}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      vote_count={movie.vote_count}
                      genre_ids={movie.genre_ids.slice(0, 2)}
                      id={movie.id}
                    />
                  </StyledNavLink>
                ))}
              </MovieList>
            </Wrapped>
            <Pagination />
          </>
        );
      } else {
        return (
          <>
            <Wrapped>
              <Title>Popular Movies</Title>
              <MovieList>
                {popularMovies.map((movie) => (
                  <StyledNavLink key={`${movie.id}`} to={`/movies/${movie.id}`}>
                    <MovieTile
                      poster_path={movie.poster_path}
                      title={movie.title}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      vote_count={movie.vote_count}
                      genre_ids={movie.genre_ids.slice(0, 2)}
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
    default:
      return <ErrorMessage />;
  }
};

export default PopularMovies;
